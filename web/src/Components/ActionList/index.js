import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

import './index.scss'

export default function ActionList() {
    const { t } = useTranslation()
    const lists = t('do.lists', { returnObjects: true })

    const [currentList, setCurrentList] = useState(lists[0])
    
    return (
        <div className="ActionList">
            <div className="ActionList__buttons">
                {
                    lists.map((v, k) => <div className={`Button `+(currentList.name === v.name?' active':'')} onClick={() => setCurrentList(v)}>{v.button}</div>)
                }
            </div>
            <ol className="List">
                {
                    currentList.items.map((v, k)=> <li key={k}>{v}</li>)
                }
            </ol>
        </div>
    )
}

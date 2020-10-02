import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

import './index.scss'

export default function ActionList() {
    const { t } = useTranslation()
    const lists = t('do.lists', { returnObjects: true })

    const [currentList, setCurrentList] = useState(0)
    
    return (
        <div className="ActionList">
            <div className="ActionList__buttons">
                {
                    lists.map((v, k) => <div key={k} className={`Button `+(lists[currentList].name === v.name?' active':'')} onClick={() => setCurrentList(k)}>{v.button}</div>)
                }
            </div>
            <ol className="List">
                {
                    lists[currentList].items.map((v, k)=> <li key={k}>{v}</li>)
                }
            </ol>
        </div>
    )
}

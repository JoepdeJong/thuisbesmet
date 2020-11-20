import React from 'react';
import { useTranslation } from 'react-i18next';

import './Organogram.scss';
const Organogram = () => {
    const { t } = useTranslation()

    return (
        <div className="Organogram">
            <h2>{t('organogram.title')}</h2>
            <iframe frameborder="0" src="https://viewer.diagrams.net/?highlight=EC6468&layers=1&nav=1&title=organogramSocialHub.drawio#R%3Cmxfile%20pages%3D%224%22%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%2297916047-d0de-89f5-080d-49f4d83e522f%22%3E7Vxbd6I6FP41rnXOQ2dBEMRHa2s77Ux75th2Wl9mRUghFYgnBC%2F99SdIECio6FjQduZlzA5I2Ht%2F374ktaF03dkFhWP7OzGR0wCSOWsoZw0A5Kam8P9CyTySAEnXvqiRzKLYFNclgj5%2BRUIoCWmATeRnLmSEOAyPs0KDeB4yWEYGKSXT7GXPxMk%2BdQwtlBP0DejE0ni9ofwnNpkt5LLWTiYuEbZs8XAdtKKJITRGFiWBJ57YAIqmGNIQRdMujL9LvKpvQ5NMUyLlvKF0KSEs%2BuTOusgJFRwrLrqvt2J2%2BT4UeazUDebzzQ8VP8H57HE2UN3H%2BUPzpN0Ui2PzWCXI5BoSQ0KZTSziQec8kZ4uXhqFXyvxUXLNN0LGXChz4QtibC7MDQNGuMhmriNmn4nHxKTcFOMucQhdrEDpLf5xOX8zOn8Mn8PNJIZP4rGLwdksM5rHoxlmqdv46Ek8Ofyc3BQO4nvy6hQa9klADbRGh6pwIQaphdg6ZQu8hBpOPUKY6wIRF%2FG34BdQ5ECGJ1nPhcLVreV1y1v%2FIZgvGkgCmZoqXE7g8kTXpex3REsVtyU%2Bwz%2Bk1pGIFp5U7FU%2FHr797HpB17xuPT0O1H8vWcc%2FWbp8pV5Vv9ULlSG39231jLnW2GbtuifQCcSj7mzOWVKfGBiGt18Gw5z5EuMs8IsdJ4VXANSmGprQZ5SMUDzjEW8hjHkvvNOi0MQoQbu4ZkEI4mnyGkJ4SxwrzTdBlKHZWnWLWVUCWbC0Y7BMk3AAJCGzU5FAk97JRK1WrfBJgSeBUjF8lgQtZ%2Bg5YesVBG1C31560%2B4Y1PSSzNtq1oVB30RPg8vTn1MyuPvuua53fc5Oagm6u9DjrgF4vyYt1OHeY%2BkKi977iN4OX8LkE0gOHCJHkOY9H58h5zmKoJKDvVE0YzMWZq%2Bd8BtBbzqdfmGBGV74xXMWMrCJACIlZB3qU5Bxq%2F0mc5GX6fM7sDEfpqy7DUFrdQJYbuxA0FKjDoJugeMk6FrtW03%2BWmSaQl3INRPtBXIRfztUnm63I9tIESXJdjOpptlT3YI9V9H4Hlh12W05GFa9u%2FaUV8zOXecHtu47Z5iektjRDh90O7clPLMT9qz40HCg72MjEvaws21n5Ddw3yxJyXGheCB1a7zuVN3awx70DIwo9qyc72yL2z0nQ2%2FgjAytybO696lY3xXO5To%2B8tF0fKovaeK238ZOkV5zpP0OIfMNG47HyMEvIz5JuH3oK0Ej3wi1Ebhvg68JGeSxd9Fm53g0G6ALLOXGusKvnf9mwwdtbg4ubVgiDEdaOoSaZ5uobYU8LjzEHyFm2JvcpTzOm9obnOtaAcz16qJ2ca%2F3wzerUmFbeEsSs3%2BPGWRQkITX20RexQ2XAfYnyGeLUMuNHZhhTu41AC%2BVFDlUA%2FYww%2FzZaBKKewZxXcxzHOSX4IyTye3D9O7BuLoddHvPwd2tTq5KcIbQ326ksQzJlZPGHrhBlsCbnF4tIocKU%2FrC2rH9JyvYlF5vrL%2FrzgruMZs4GFmc9MIafExJeE2I8c34VNRDCeqV7yrpWXhqBSm6rOv1wrPe0L0bPMH%2B8bmu7XXAZfK6Zaeq5D6DPMRKf%2FXHCDkswN7fOasfVq183t1frZxvfclShbVyoYnUI0RdqyLUFZTKx4A6JYe6TL68Fm7vmpbWvn9XP9z0nG0eKH6Zcq1jC1F%2FiugoVcWc0xHyvANsKJIxNDAL9apKFXNmYd%2Bh0vZiXCf%2FaTKspdRC3ZXtPtZ3Tm3dsvPt%2FkZXaXROHbRwBxR4n4he81V%2Fu%2FbOP6j3MNNRQ%2FPwj5CuW3YKmlcBxSb2DTtsHXBYsU8NSr3KnKeYPD%2F8dlyJvfTtzzCt25XbWJKIZleNnbrlCe6vnhEMIePev7n1jvy5LV9Mfk0AvHAdtSN%2FVceNTGtvtVYOobFXceNdjfe7YrC3mgWNPbXuTbkPf5ZmdzzHwfRgtuNLnrBo5xNiXhE6mEFMw2TYxaaJHPSZ8uFcu6GoUt0XGEsir56joweX2oIjzW1BPrm9gdD1h2jEVcNdyPxE%2BMqntlqVfxxVbKB695SPut4EBbnsYR43%2BYeSZ8Szev7%2Bi07PEFn8A68x48bseh%2F5jez0gwG2WZCeVnks5PnXVYfdXU3biqGNBhNAz5rtkz%2Fd3DIQLlRdwbb0YSL4BrFoawVs8ob0wj43WJWa%2FyzD7kA6v%2B4%2FduyeThzzsn%2F1qhacKBB1B8Kb2nwf6iRBrslXXSJUaBeQs8sttaCH%2FfAM5nZJ6lEftXprGLn9riBKfrAl%2BrWM5KdxlPP%2FAQ%3D%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22-vOVwTVcJOZCFfuTO8oJ%22%20name%3D%22Page-2%22%3E7VlJd%2BI4EP41vOk5wLNlm%2BWYGAjprB0mW98Uu7AVZImWxZZfP5Itg4F0ApOkhwM5EKkWlVTLJ1mqOH4yOxF4FF%2FwEGgFWeGs4rQrCDU9R%2F1qwjwn2A6yckokSGhoS0KfvIAhFmJjEkK6Iig5p5KMVokBZwwCuULDQvDpqtiA01WrIxzBBqEfYLpJvSehjA3VrreWjB6QKDamm6iRM55wMIwEHzNjr4KcuuNbx52cneBiLLPQNMYhn5ZITqfi%2BIJzmbeSmQ9U%2B7Zw29mPbnLOLq4lv2rQR25dfv85quaDdXdRWaxQAJP%2Feejhr%2BTX6Z1KgUvPvj4f13uXg55RsSaYjo07e2OSTiCVhEV6zXIcKqPAKqiu%2FKNi7hwTRiTBksBEk7sBTxKSpkTlQO4mOS9CkzkXtH1b6Q0IpT6nXGRMB4K6W28qeioFH0LBYZyBJhbO1pqRwCFR01iTGXAm%2B8aabfolA93sr5DL89Z2VX9Ldxq3T0BImJVyzbj3BHgCUsyViOEi26ScKaVq0zL%2BnS4TEzUNLS7lZN3QsKmFaDH2MqCqYWL6enz%2Fub%2B4vT2R4cuceb353U%2FfDUSxhlJMIFTVY7pcyJhHnGHaWVKPl1HT0V7KnHM%2BMp5%2BBinnxqV4LLkixTKhhgszIh%2BMum4%2F6nbNM732rMRqz4sOU8t9WArq7mMxnu4s1bJeoZevTy9qDQ22C27KxyKANwqkQDQsIpDvFdJmZgigqlImq5PbIcq3KYirp2eNm8ii%2BAlortpf1qV1J8jzVNUWiUCkpTq9BzFU7G%2F9u%2FbfuWFK2DDXj6XU8Hyk7aLudDqtLSp9Uh5uqsZQG8ZA1hjNZNF7iFIuEZOh2yICQp7rwWchgrcHiOBaa4jQsF9BBOtzEEF1S%2BmyA0g4B5D4GEig%2FQeJG4zDDAxutsACrbeo%2BdIRoCsgiGU64qk6AYCeBYTwAlEELA1iPCpLi8zgNoiBDojxBmLUnT1EDPeAGB9DDGc%2FEaOtito6o0CYbvicpWMqMdNS39pn%2FhbQEcIwUw8WulufHJwDDryBA563hzjgHXDgYzjg%2FiEcMKrXnGTFXHywNqy1JGuuJU8%2BMaO2lj%2BLeeyCMKfqbCCYmrQOuT6XQApYBHHpu%2BVacKP37fTmWmGO1dankfexh4jRbt8q7gFx3kAct7GHiFM%2FIM7HEMfbz5PHVYL%2FShWpz2H0fqXzBKepkty60r1Dpb9R6U7r%2F630qtd9QOe3MPZbN%2Bd9Z3KDvndeuZru4oBQIoHIDRBYjeAfv1FeS5mOb662vyqCmxfNXxa%2F7YJlbwTrSkSYkRRnFwW7vAt8br3tw7vAerTsLyy33%2BHrOqaGWGIFqdnjGuqq2CK%2F1WjZdcttVEMrhGqzNfCqVtMKq25r4IZNBzyEBqtQ2%2F5xNTyaWp1eOvSfLHQR4DRc2Tg2oba0qy5Cqbe9EKfxYovGlERMtQN9k6Sidqx9TQJMjwwjIWFITTqM9MjJLNKvm7X8QRHl%2F%2FWw83wH1vayJ0%2B7VUMtHXtKRj0zEcZlEBvTa8k4CMCrNzaSsVzjOad4ekSLPNrIj21T6%2Fd5VF87rjeajZq3kUruK5nkeJ8B3PoGcPHcmX8DLN%2BUnc6%2F%3C%2Fdiagram%3E%3Cdiagram%20id%3D%222g3NgJizAqxbV6ydZHha%22%20name%3D%22Page-3%22%3E7VxZd6o6FP41rnvvg13M6mOde46eDra29qUrSkQUCScEh%2F76GyAoIli1VbG1D9VMDHt%2F397ZOzEZsTSe1TCwBk2kQiMjcOosI5YzgiAKfI5%2BuDVzv0bIi3m%2FRsO66tfxy4qW%2Fg5ZJcdqHV2F9kpHgpBBdGu1sodME%2FbISh3AGE1Xu%2FWRsXpXC2hwraLVA8Z67bOukgGr5ZXCsqEOdW3Abp0X2Bt3QW%2BkYeSY7H4ZQVTEEles%2BM1jEFyLvag9ACqahqrESkYsYYSI%2F208K0HDFW4gtulrLdf%2BzU3vGved%2B7%2BN%2B%2Fecncv6F6vuMmTxhhiaZO9Lm21Qs3%2FNu%2BpfufY3PxwKk4ffbAg3AYbDxNkEgNi9AbAsaOjDEW1EpgrxO4Iju0fvj50xEweZByrwhAjd%2B%2FAZsdjXDaOEDIS9RlEQZEmmHYs2wWgEgxYTmV5lIFR3pIaBqtN7RPr0kUla7G48K4duUPX%2Bgn4%2BPnmJlrcUGxPvBGICZyFMMTHWIBpDgue0C2uVJO6KU%2FxRjDXZvMhEOV1iUMizukEIfgqrAwz22uLyS93RL0x98arsFo0b51kV29PbCt9%2F%2BjMuT56C1wipBaqUKKyIMBkgDZnAqCxri6uKW%2FZpIGSxyiEkZM6kChyCaNWAjA3WCmc6eaHfuauczIqdUFPZlRgXFOZBgaJo%2FhJ0cwsd7xJyUFwO80rLceq1azAS0BNV%2F0aYMLHISbhMAvFumCIAa5BsUBoDg6upjcjD0ABEn6yavDgIsaF3SKfPt0CszK0jVs5FkGgjB%2FcgGxkB4%2BJR9seneMHn7vjkT4xP4efgU77g8%2FzwKf0cfOYu%2BDw%2FfCrfEp%2BS9VpuvjQ1vn1rSc92o15%2FK17mnynHZ6zSvuf8k78xHv90Gq2m08pmzVz7tT95yPKFTwGU%2ByxAw%2FjktsNnCJKdMFwT8LkbNnxxZ1jQ3x0%2BtmfFu8aoPceg83Y%2FXWAjjKFNOYSvw1BCGPxkQ3zbHbo5JIEzQBca%2FtCKqekmhNj2skeY%2Fq9hYKoWvbR3iwAVyS%2B5iqLExMbRExgRI1ApKZKSP2BiQ5TXaZoTYhIb3NckNmgxpNQduLxIyaWey%2Ftzst%2BsZK87DT3bes9dW3Ou9CvbPJq9DjJXCxREjbVvFb7CWG96z1Beso4w7AH33U36r0UclUrU%2Fb4xF%2FntKavwx6Xslvz83GTwW%2FvaWLwLKfO127FUWGNpiJccoig2gE3tA8WnyHtKDZYSfjpt87kT01ZHTXPeGDepTHv1UbnO5e47pw7hhD1COC6zUwiX9oDtQ0MhrRuKWFWezFDEx1757%2B4PVGAPFiw4vM7PwDlIa87BXVrGUIOG5x4mbrzWcwziODht7gBZoKcTV7cydwLvUKDOIfyXuvmdcko682EyL6j9IZ1zR5rfbVrnDVN4U87l4PGdEonv5ChU9o7vkrI04ZlhG%2BvDKeWUrnlZm8X08Blid8PJv612%2BT%2F%2FcQzdHPnjB4S4G4qu3UcRqtPp9MoOrjgJX25Kr6FCo0%2BuTMPrG04BJetmyxTQQfe2yDtYqEOZHkEprGdqlRSmgD63HPYDTVBMiHkcE7RjOrcGx9ClNa0tuzz%2B2BDsRnfhQvfNdJfyKaT7SQOIc6R7TNCQSrq3dazp3p7kMoJkC%2F5KaeFvGraixvKXSyF%2FT7r4eo78Vc6Evy2i9wZENzVa3dDLm721HXQ2dHVrh62khfBpddhiGpdog5%2BHpJ%2Fx%2BxP3xFtqVlGgHDyEvx2Df9ykXQtB6%2BNZORoD26Y943ieLLgLz5N5Lkhp5Pn3D8S%2FKLe%2FaZ0m7OY3ZdOPn9vf9NSh3P4TwZC6dht6UAhSfWJ1DRwpnaBHMv6HojUfyezLYsSIH5Di2%2FH5cz%2BDOAc678%2FgrMHXxFa%2FViugl7%2FtGff8pyOcLrW%2F40S9hIChEx2G8u0VLxtPoOZ90tI7AGOKMvVj7%2B6l6Og4uBwU5%2BiTJXZx9MmO%2FpBWYBtHf%2F9yXW23MUAj%2B6VZvX9u9UdWjM2%2Fw8iHWboWb4%2B9WstHJuIHTJ9upyl%2BTVO3WAOmbgOP%2FufhkI%2BlLb5wao%2FLn3SzZMpdrmPdvFaEahNq779n1vRxPCpxaVtNV6KYWqygHCwUr0ODhuDcP67frgPLCni9yWUP6Bhz4HUOXLW46q2ThX3x1snemk%2Fj8jh%2F0i063H5GRTilURHWjcqmTc%2BnWzCD9IV1TTc1%2BwEAOlXfdpncjcoXC%2BUU8mBttp4slwv%2F%2FdaCHM26pjInd9Ig%2FhzJH7NankryPz7tyfctiJ6ahfVUEj2Vm%2BB46VyI%2FsV8PdK5CgUhau4Pvsj2hdvfkiV3YXkCy1O5943%2F3NFZ39udx0vsTNz5HWIp%2BW25bvkDfLaP9aGZ7ToOpgOrrKXrYAgcm1a4YWrVL2Z9E%2BEpd8VCJAvvYiGSLMRxd9clIaf89Hy7hWtwpijOM%2FyaFAvV36r1y3zp30PnZjp7KF8SPRv1fuRNVkl6j%2BpcBQRQlXuH5ApVd%2BWuVMgVeIWTclmVU2E2X%2BjLWS7PqVmp0JfUvAhlagxX4dB9vhWuxe7N8JZ7qD1cZ1%2Ba3OADOIQcxUK9K3sl3AIwdM2k391zYyHVZNGVv94DxjVrGOuqajCIWO6VxzPNPab4yj8YWPA%2F3cvOfe%2Fj3s87u5gvXAkFFw%2BGbtXZg5iI9Abs1hGA9ntQVnJrAA0vD%2FktwRHCwgGxJUZP18jzuSt5DV1SDLhE%2BSDTDvxWVy2r0NS0x0lxVudHb5XeJ38Nfj7LEhHvv980JFaCO61THG%2FWUXYnHHRmoLmhhk283%2BB9HGSsDIhzKskiOE%2BnskbobZGx0%2BrBcQMOWrU8sNwPUpfHwouV%2FwE%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22esyh1Gv_v2aGml5A1I5p%22%20name%3D%22Page-4%22%3E7Vpbd9o4EP41nNM%2BmGPLN3gMBJproSUJSV%2F2CFvYCkaitoyhv34lWwZzCYE0kLBLHoI10ozkuXyakVzS68PJtxCO%2FFvqoqAEVHdS0s9LAGgqMPiPoEwlxdCqGcULsStpc0IH%2F0E5q6TG2EXRwkBGacDwaJHoUEKQwxZoMAxpsjisT4PFWUfQQyuEjgODVWoXu8yXVM2qzjsuEPZ8OXUF2FlHDzoDL6QxkfOVgG7pdbXWyLqHMJclXzTyoUuTAklvlPR6SCnLnoaTOgqEcnO1jZTftfYUtbrG%2FfefleDp6fEfQ8mENXdhmb1hiAh7s%2Bh2P%2FExsS8A617WzSHuPsBYsqhjGMRSnR3qYCj4LokT9yCjoXx7Ns01nuoMCbFaSa%2F1cRDUacDHiU4dANMw%2BcBaxEI6QHkPoSQl5joUnF4IXcxfaWlMnxLWkbNpsl2YoJn%2B5eMyd9QM3t5SS1KbYxQyNCm4kNTaN0SHiIVTPkT2mpqZscgIUSqqVFtS8LdKJaP5BVez5DgoXdybyZ7biT9IU603W%2Fe7c99ug8uk3Xb8m9vRw2NwpZgrNkEuDwrZpCHzqUcJDBpzam1uNZW35mNuKB1JTT8jxqZSpTBmlJN8NgxkL5pg9ijYy6ZsPUlh4vl8UmxM8wbhr1tgEs2nXJ5ozNnSVs7nwsifedhuho1oHDpSK4Pb6pg8oocfgxh4diO6duturjwGQw%2Bx12NDaHajm4QogAyPF%2BHob0y%2BadXFSB3CkHFSHTOxjBvYeyVSDx6RdAQdsTj93FRXkaJRtwyrssfAtfSlwLXXBC7IaQcJXHXFRP%2BxwH3nWLWOMlatlVjtIoZI5PhwFHUxGaQ52Jcu6l5%2B%2FWwxe%2Bgg1e0DBul9hMJW71mkoUANYA8FeeonBAXcMlnbhQyW9LM09QRNbmtQr9pVzVINW3FVFymVat9U1IrqKka1b7gVHZkA9DMxuWvooDIdhxPyM9HiYf3WQd%2FMnqIWlCFdqWD7QtDObLywHYoGDLBH%2BLPDLYG4mWpC2ZgnxGeyY4hdN5B%2BMhKShxNPJP%2FlLN0G2a8QO80CXMyXVgRatQyqwgkCPLqQCyGUOb6cesk5%2Bg4yLXvFS4tuk%2FXkiTnYoyMZuT%2FMHKlil80VVzLWeFK%2BT%2BzgSbxZcKYddoAc%2BT5kB8ifnxZ2g1d3APtQW8CP5LrzoPeI4d%2F9qulVUwWNHNqLW8Am0N37FvAShnQcjsL8TXhCJvSBljHFZ0xUxGdCLmgmSVJmMS%2FG%2B6xMuNM0o4zdkbzNRSx5WTMvYskBqzTzE1RpuroU%2FhbY3z7y5ugHp%2BjfLfrBkUT%2FDe6FMJ2hNUKE%2F8zgYCcUCHIxTRYrKV2hXJ4S5dK2wQVwwoUNuGAanxAX9BMu7IYLxpHgwrlICK4DhEmaGVASxQGDRIz6cn5d%2F%2Fo6PrhokLI7M94MKrYAAuMEBBuAYFYwfCYgsD8SCNQdgGDhhLaACuAjUWHNcdGmw9T3QwXJ2qY4De38AHK5JDXNJVfKVirZlrxpto7tDqI26KNwEHWBUF%2BskFBPMJNxHHDw4c98qK6pab3vYm%2FFCz%2Fpnc%2FSCfO%2BsMNevgLaZxKxHVAYp4xhN2zQjuUgYc1Z8Sw4u9BDhMerKDFeSxySOMwyhfRfi1s%2BTPBzpLRGPJ9wpZBmMp8tSWcrc3tvkVtop9OHTcmFXvmEyYV1LMnFm%2FOJd7o31tSG2rpy%2B8Y17MPar%2BdOe5Dk4w6fXGy7T2xadSEF4EUIgyno%2FKFokB5W8KkKIHNJCB3zpVHRlV4rqw1MXJ%2BOc9g5JQYvJQb7PHVcMfgzvHmyx7F91exabtK4NS619ppPetohzXaZ%2F%2FdNI1iC6D0i9HaWWg3NVuhBgiMee%2BhYAu1Q1tKqhzQX9smFPux8%2F038tmFOH5Ur5Xhu7t6%2B761973V584aLusPve%2Bbg9%2FSmZ02i2vNZ5y5yh2zS%2Bdgvbd5WHxUTncJnN%2B9eHv2VlcGBrPxSdXR3z9vn4mak9GoFtHC1UlqoaV7WwamkWQ%2FAB75P5aT5p9XZedj8A3a98S8%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E" title="Thuisbesmet.nl Organogram"></iframe>
        </div>
    );
};

export default Organogram;
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { INTERNATIONAL_DIALLING_CODES } from '../../constants';
import { useDebounce } from '../../hooks/userDebounce';
import styles from './styles.module.scss';

export function INTLDiallingCodesSelect() {
  const [flagAndCode, setFlagAndCode] = useState('🇨🇦 +1');
  const [value, setValue] = useState('+1');
  const [searchCountry, setSearchCountry] = useState('');
  const [codeList, setCodeList] = useState(INTERNATIONAL_DIALLING_CODES);
  const debouncedSearchTerm = useDebounce<string>(searchCountry, 400);

  const handleDialCodeValue = (flag: string, dialCode: string) => {
    setFlagAndCode(flag + ' ' + dialCode);
    setValue(dialCode);
  }

  const handleSearchCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchCountry(event.target.value);
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      const regex = new RegExp(debouncedSearchTerm.toLowerCase() + '\s*', 'ig');
      const filteredList = INTERNATIONAL_DIALLING_CODES.filter(item => regex.test(item.name.toLocaleLowerCase()));

      filteredList.length < INTERNATIONAL_DIALLING_CODES.length ? setCodeList(filteredList) : setCodeList(INTERNATIONAL_DIALLING_CODES);
    } else {
      setCodeList(INTERNATIONAL_DIALLING_CODES);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <label htmlFor="dial-code" className={styles.container}>
        <div className={styles['container__select']}>{flagAndCode}</div>
        <input type="text" value={value} id="dial-code" style={{ display: 'none' }} readOnly/>
        <div className={styles['container__list-container']}>
          <input type="text" placeholder='Search a country' className={styles['input-search-country']} onChange={handleSearchCountry}/>
          <ul>
            { codeList.map(country => (
              <li key={country.code} onClick={() => handleDialCodeValue(country.flag, country.dial_code)}>
                <span>{country.flag + ' ' + country.name + ' ' + country.dial_code}</span>
              </li>
            )) }
          </ul>
        </div>
      </label>
    </>
  );
}
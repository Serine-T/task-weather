import './styles.scss';

import TemperatureForm from './components/TemperatureForm';
import SearchForm from './components/SearchForm';

const HeaderSection = () => {
  return (
    <header className="styled-header">
      <div className="styled-toolbar">
        <SearchForm />
      </div>
      <TemperatureForm />
    </header>
  );
};

export default HeaderSection;

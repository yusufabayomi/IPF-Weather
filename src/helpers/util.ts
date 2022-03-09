export const formatDate = (dateString: string) => {
  const date = new Date(dateString).toLocaleDateString('en-us', { weekday: 'short', day: 'numeric' });

  const splitDate = date.split(' ');
  return `${splitDate[1]} ${getDateOrdinal(+splitDate[0])}`;
};

const getDateOrdinal = (digit: number) => {
  const pluralRule = new Intl.PluralRules('en-GB', { type: 'ordinal' });

  const ordinals = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    many: 'th',
    zero: 'th',
    other: 'th',
  };

  return `${digit}${ordinals[pluralRule.select(digit)]}`;
};

export const formatTemperature = (temperature: number) => {
  return `${Math.round(temperature)} \u00B0`;
};

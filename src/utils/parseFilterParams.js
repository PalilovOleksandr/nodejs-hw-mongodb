const parseQuery = (query) => {
  const isString = typeof query === 'string';
  if (!isString) return;

  const isFavourite = (isFavourite) => ['true', 'false'].includes(isFavourite);
  const isContactType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isFavourite(query)) return query;
  if (isContactType(query)) return query;
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;

  const parsedIsFavourite = parseQuery(isFavourite);
  const parsedType = parseQuery(contactType);

  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedType,
  };
};

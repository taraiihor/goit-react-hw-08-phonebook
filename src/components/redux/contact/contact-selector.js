export const getContact = state => state.contacts.contact;
export const getFilter = state => state.contacts.filter;
export const getLoding = state => state.contacts.loding;

export const getVisibleContact = state => {
  const contacts = getContact(state);
  const filter = getFilter(state);

  const getFiteredContact = contacts => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(text =>
      text.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return getFiteredContact(contacts);
};

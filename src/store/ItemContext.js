import React from 'react';

// sukurti konteksta
const ItemContext = React.createContext({
    discount: null,
    onApplyDiscount: () => {}
});
ItemContext.displayName = 'ItemContext'

export default ItemContext;
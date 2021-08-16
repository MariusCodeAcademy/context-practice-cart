import React from 'react';

// sukurti konteksta
const ItemContext = React.createContext({
    discount: null,
    onApplyDiscount:null,
    onApplyDiscountSingle: null
});
ItemContext.displayName = 'ItemContext'

export default ItemContext;
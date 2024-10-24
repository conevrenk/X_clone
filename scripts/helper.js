// localstorage kayıt yapacak fonksiyon

export const setLocal = (key, data) => { 
    // verileri stirnge çevir
    const strData = JSON.stringify(data);
    // localstorage kayıt yap
    localStorage.setItem(key, strData);
};
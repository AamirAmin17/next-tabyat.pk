import cryptoJs from "crypto-js";

const secreteKey = "Medznmore2022Winner";
export const setEncryptLocalStorage = (key, value) => {
  const encrypted = cryptoJs.AES.encrypt(value, secreteKey);
  localStorage.setItem(key, encrypted.toString());
};

export const getDecryptLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem(key)) {
      const decrypted = cryptoJs.AES.decrypt(
        localStorage.getItem(key),
        secreteKey
      );
      const decryptedString = decrypted.toString(cryptoJs.enc.Utf8);
      return decryptedString;
    }
  } else {
    console.log(`${key} is not stored in localStorage`);
  }
};

export const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined") return localStorage.setItem(key, value);
};
export const getLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    const message = localStorage.getItem(key);
    return message;
  }
};

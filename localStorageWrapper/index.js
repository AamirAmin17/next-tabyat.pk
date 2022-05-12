import cryptoJs from "crypto-js";

const secreteKey = "Medznmore2022Winner";
export const setEncryptLocalStorage = (key, value, encrypted) => {
  if (typeof window !== "undefined") {
    if (encrypted) {
      const encrypted = cryptoJs.AES.encrypt(value, secreteKey);
      localStorage.setItem(key, encrypted.toString());
      return;
    }
    localStorage.setItem(key, value);
  }
};

export const getDecryptLocalStorage = (key, decrypted) => {
  if (typeof window !== "undefined") {
    if (decrypted) {
      if (localStorage.getItem(key)) {
        const decrypted = cryptoJs.AES.decrypt(
          localStorage.getItem(key),
          secreteKey
        );
        const decryptedString = decrypted.toString(cryptoJs.enc.Utf8);

        return decryptedString;
      } else {
        console.log(`${key} is not stored in localStorage`);
      }
    }
    const message = localStorage.getItem(key);
    return message;
  }
};

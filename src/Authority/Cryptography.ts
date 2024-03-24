import crypto from "crypto";
import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = "7xK9BnDv4oJ3A2c8R6sL1pW5kFgT2hQ4"; // 16, 24, or 32 bytes
// const ENCRYPTION_KEY = crypto.randomBytes(32).toString('hex');
const IV_LENGTH = 16; // For AES, this is always 16

// Encrypt Data
export const EncryptWithCryptJs = (payload: any) => {
  const key = "your_secret_key";
  const encryptedPayload = CryptoJS.AES.encrypt(
    JSON.stringify(payload),
    key
  ).toString();

  return encryptedPayload;
};



export const Encrypter = (text: string) => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");
  return iv.toString("hex") + ":" + encrypted;
};

export const Decrypter = (text: string): string => {
  const textParts: string[] = text.split(":");
  console.log(ENCRYPTION_KEY,":",ENCRYPTION_KEY.length)

  if (textParts.length < 2) {
    throw new Error('Invalid input format');
  }
  const iv: Buffer = Buffer.from(textParts.shift() as string, "hex");
  const encryptedText: Buffer = Buffer.from(textParts.join(":"), "base64");
  if (!ENCRYPTION_KEY) {
    throw new Error('Encryption key is missing');
  }
  const decipher: crypto.Decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );

  let decrypted: string = decipher.update(
    encryptedText.toString("utf8"),
    "base64",
    "utf8"
  );
  decrypted += decipher.final("utf8");
  return decrypted;
};


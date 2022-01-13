import { strToUTF8Arr, base64EncArr, base64DecToArr, UTF8ArrToStr } from './encode-decode-helper';

const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

export const decode = (encodSrting: string) => {
	const decodedArray: Uint8Array = base64DecToArr(encodSrting, uint8.length);
	const decodedString = UTF8ArrToStr(decodedArray);
	return decodedString;
};

export const encode = (stringToEncrypt: string) => {
	const arrayString = strToUTF8Arr(stringToEncrypt);
	const encodedSrting = base64EncArr(arrayString);
	return encodedSrting;
};

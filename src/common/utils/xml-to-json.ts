import { parseStringPromise } from 'xml2js';
import axios from 'axios';

export async function fetchAndParseXML(url: string) {
  const response = await axios.get(url);
  const xmlData = response.data;
  return parseStringPromise(xmlData);
}

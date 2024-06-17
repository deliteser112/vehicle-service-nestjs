import axios from 'axios';
import { parseStringPromise } from 'xml2js';

export class XmlService {
  async fetchAndParseXML(url: string) {
    const response = await axios.get(url);
    const xmlData = response.data;
    return parseStringPromise(xmlData);
  }
}

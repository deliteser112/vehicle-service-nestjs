import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import { XmlService } from '../xml.service';

jest.mock('axios');

describe('XmlService', () => {
  let xmlService: XmlService;

  beforeEach(() => {
    xmlService = new XmlService();
  });

  it('should fetch and parse XML data correctly', async () => {
    const mockXmlData = `
      <root>
        <item>
          <name>Item 1</name>
        </item>
        <item>
          <name>Item 2</name>
        </item>
      </root>
    `;

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: mockXmlData });

    const result = await xmlService.fetchAndParseXML('http://example.com/xml-data');

    expect(result).toEqual({
      root: {
        item: [
          { name: ['Item 1'] },
          { name: ['Item 2'] }
        ]
      }
    });
  });
});

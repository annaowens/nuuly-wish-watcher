// backend/services/nuulySearchService.ts
import axios from 'axios';
import { load, Element } from 'cheerio';

const nuulySearchUrlBase = "https://www.nuuly.com/rent/products/";

class NuulySearchService {
    static async fetchHtml(searchQuery: string): Promise<string> {
        const response = await axios.get(nuulySearchUrlBase + searchQuery);
        console.log('Initial State Line:', nuulySearchUrlBase + searchQuery);
        return response.data;
    }

    static extractInitialStateLine(html: string): string {
        const $ = load(html);

        // Find the <script> tag containing "initialState: JSON.parse("
        const scriptTag = $('script').filter((_index, element) => {
            const scriptContent = $(element).html();
            return scriptContent != null && scriptContent.includes('initialState: JSON.parse(');
        }
        );

        // Extract the line starting with "initialState: JSON.parse("
        const scriptContent = scriptTag.html();
        const initialStateLine = scriptContent?.split('\n').find(line => line.includes('initialState: JSON.parse('));

        return initialStateLine ?? "";
    }

    static parseJsonFromInitialState(initialStateString: string): JSON {
        // Remove the outer 'initialState: JSON.parse(' and ');'
        const jsonString = initialStateString.trim().replace(/^initialState: JSON.parse\(\s*\"|\"\s*\);$/g, '');

        // Replace the escaped double quotes
        const unescapedJsonString = jsonString.replace(/\\"/g, '"');

        // Parse the JSON string
        try {
            const initialStateObject: JSON = JSON.parse(unescapedJsonString);
            console.log('Parsed JSON:', initialStateObject);
            return initialStateObject;
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return JSON.parse("");
        }
    }
}

export default class DataService {
    static async fetchDataWithInitialState(url: string): Promise<string | null> {
        try {
            const html = await NuulySearchService.fetchHtml(url);
            const initialStateLine = NuulySearchService.extractInitialStateLine(html);
            //const responseJson = NuulySearchService.parseJsonFromInitialState(initialStateLine);

            return initialStateLine;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
}
import config from "../config.js";
import { fr } from './fr.js';
import { en } from './en.js';

const translations = {
    en,
    fr
}

export const t = translations[config.locale];
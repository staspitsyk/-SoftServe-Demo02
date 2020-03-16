import { AnimalController } from './components/Animal/AnimalController.js';
import { SearchController } from './components/Search/SearchController.js';

const animal = new AnimalController();
const search = new SearchController(animal.handleSearch.bind(animal));

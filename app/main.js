import { AnimalController } from './components/Animal/AnimalController.js';
import { SearchFilterController } from './components/SearchFilter/SearchFilterController.js';

const animal = new AnimalController();

const search = new SearchFilterController(animal.handleSearch.bind(animal), animal.handleFilter.bind(animal));


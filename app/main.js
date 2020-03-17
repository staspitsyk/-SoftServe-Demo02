import { AnimalController } from './components/Animal/AnimalController.js';
import { SearchFilterController } from './components/SearchFilter/SearchFilterController.js';
import { Publisher } from './helpers/Publisher.js';

const publisher = new Publisher();
const animal = new AnimalController(publisher.methods);
const search = new SearchFilterController(publisher.methods);

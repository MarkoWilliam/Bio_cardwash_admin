import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
public connected: boolean = false;
  constructor() { }
}

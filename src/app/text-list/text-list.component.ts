
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamelCasePipe } from '../camel-case.pipe';

@Component({
  selector: 'app-text-list',
  standalone: true,
  imports: [CommonModule, CamelCasePipe],
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.css']
})
export class TextListComponent {
  texts: string[] = [
    'Hola Mundo',
    'Proyecto en Angular',
    'Usando Pipe Personalizado',
    'Centro de Estudios Superiores del Noroeste'
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import { AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import ClipboardJS from 'clipboard';


hljs.registerLanguage('pythonCode', python);
@Component({
  selector: 'app-day-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent  implements OnInit{
  user = {
    name: '',
    age: '',
    country: '',
    hobbies: ''
  };
  @ViewChild('pythonCode', { static: true }) pythonCode!: ElementRef<HTMLElement>;

  showResult = false;
  hobbiesList: string[] = [];
  pythonCodeContent = `
# Personal Information Display
name = input("Enter your name: ")
age = input("Enter your age: ")
country = input("Enter your country: ")
hobbies = input("Enter hobbies (comma separated): ").split(',')

# Format and display
print("\\n" + "=" * 40)
print(f"Personal Information 🌟".center(40))
print("=" * 40)
print(f"👤 Name: {name}")
print(f"🎂 Age: {age}")
print(f"🌍 Country: {country}")
print("❤️ Hobbies:")
for i, hobby in enumerate(hobbies, 1):
    print(f"    {i}. {hobby.strip()}")
print("=" * 40)
`;

  // Emojis defined in component
  emojis = {
    header: '🌟',
    name: '👤',
    age: '🎂',
    country: '🌍',
    hobbies: '❤️'
  };
  ngOnInit() {
    const copyButton = document.getElementById('copyButton');
    
    if (copyButton && this.pythonCode) {
      const clipboard = new ClipboardJS(copyButton, {
        target: () => this.pythonCode.nativeElement // Correctly access nativeElement
      });

      clipboard.on('success', (e) => {
        console.log('Text copied:', e.text);
        alert('Code copied to clipboard!');
      });

      clipboard.on('error', (e) => {
        console.error('Error copying text:', e);
        alert('Failed to copy!');
      });
    }
  }
  showOutput() {
    this.hobbiesList = this.user.hobbies.split(',').map(h => h.trim());
    this.showResult = true;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.pythonCode) {
        hljs.highlightElement(this.pythonCode.nativeElement);
      }
    });
  }
}
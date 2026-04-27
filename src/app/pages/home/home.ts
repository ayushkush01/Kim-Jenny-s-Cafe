import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
})
export class Home implements OnInit, OnDestroy {
  heroWords = [
    'Culture.',
    'Craftsmanship.',
    'Connection.',
    'Conversations.',
    'Comfort.',
    'Creativity.'
  ];
  currentWordIndex = 0;
  currentWord = this.heroWords[0];
  isAnimating = false;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.isAnimating = true;
      setTimeout(() => {
        this.currentWordIndex = (this.currentWordIndex + 1) % this.heroWords.length;
        this.currentWord = this.heroWords[this.currentWordIndex];
        this.isAnimating = false;
      }, 800); // Wait for smooth fade out
    }, 4000); // Change word every 4 seconds (slower)
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

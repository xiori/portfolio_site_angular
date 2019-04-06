import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SliderService } from './slider.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class SliderComponent implements OnInit {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/2000/500?random&t=${Math.random()}`);

  homeList: string[];
  private homeListeSubscription: Subscription;

  constructor(config: NgbCarouselConfig, private sliderService: SliderService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.homeListeSubscription = this.sliderService.homeResult.subscribe(homes => {
      this.homeList = homes;
    });
    this.sliderService.fetchHomes();
  }
}

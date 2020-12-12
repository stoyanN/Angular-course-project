import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutInterface } from './about-interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  records: AboutInterface[] = [
    {
      isVertical: true,
      imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607811968/sleeping_gsmz8d.jpg',
      description: 'This is me only 30 days old sleeping on my humans bed. This was one of my favourite activities to do and guess what...it is still a favourite thing to do.'
    },
    {
      isVertical: true,
      imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607811963/baby_jg5jzb.jpg',
      description: 'On this picture I am a little older than the first one. As you see I learned fast how to pose infront of the camera. I look so fluffy &hearts; .'
    },
    {
      isVertical: true,
      imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607811963/playing_dkjx0p.jpg',
      description: 'Here we are me and my best friend - The Angry Chicken. We used to love playing together. Every time when he was trying to run away from me I was there to catch him. Unfortunately one day The Angry Chicken went to visit a human friend and never came back.'
    },
    {
      isVertical: false,
      imgSrc: '../assets/images/pictures/christmas.JPG',
      description: 'My humans realised that I look so handsome infront of the camera... so they took me to some guy with very big photo camera. He was taking picture of us for an hour... it was very exhausting.'
    },
    {
      isVertical: true,
      imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607811967/1st-of-march_itzeax.jpg',
      description: "This picture is taken at 1<sup>st</sup> of March. I didn't know it is a traditional bulgarian holiday. My humans gave me this thing Martenichka. It is made of white and red wool and you have to wear it until you see a stork. It is a little strange but as long as we do this for good health I am in."
    },
    {
      isVertical: true,
      imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607811966/caffee-on-the-beach_dz5xai.jpg',
      description: 'Oooh this is a favourite memory of mine. As I said at first &hearts; I LOVE THE BEACH &hearts; !!! I love when my humans take me there. While they are drinking this strange soup called coffe I am digging and searching for treasures.'
    },
    {
      isVertical: true,
      imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607811970/watching-the-see_m3bh3h.jpg',
      description: "On this picture you can see the long road in the sea. I don't like going on this road because it looks so scary but it is nice to stand on the beach looking at it... dreaming about good food and cold beer!"
    }
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }



}

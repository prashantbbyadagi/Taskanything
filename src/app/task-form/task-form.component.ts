import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-task-form',
  templateUrl:'./task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit  {
    searchcontent:string= '';
    searcheditem:string='';
  
   json1 = 
  {
    "data": [{
        "name": "Food delivery",
        "slug": "food-delivery",
        "profileImg": null,
        "description": "Hi id like some takeaway picked up from Lien's restaurant yass and delivered to be. Only about &nbsp;7 mins drive away. I will reimburse cost of takeaway",
        "budget": 10,
        "publishedOn": "May 8, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Yass NSW 2582, Australia",
        "state": null,
        "category": "Handyman",
        "status": "Open",
        "postedBy": "Ngoc Nguyen",
        "posterSlug": "ngoc-nguyen-1",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 0,
        "comments": 0
    }, {
        "name": "Garden work",
        "slug": "garden-work",
        "profileImg": null,
        "description": "Need help cleaning my backyard. lawn maintenance but aLso need help with weeding, removing some shrubs and taking out 1 stump. Not urgent but want done in time for christmas.&nbsp;",
        "budget": 120,
        "publishedOn": "May 6, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Chatswood NSW 2067, Australia",
        "state": null,
        "category": "Gardening",
        "status": "Open",
        "postedBy": "Chuck Chismy",
        "posterSlug": "chuck-chismy",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 1,
        "comments": 0
    }, {
        "name": "Stripped bolts",
        "slug": "stripped-bolts",
        "profileImg": "https://s3.ap-southeast-2.amazonaws.com/taskanything/user-profile/e1b45b23bcc83301e9974465480fca22.jpg",
        "description": "As part of trying to disassembly my diff, I stripped one of the bolts which connects the prop shaft to the diff. Have tried everything but cant get the bolt off. Need help removing the bolt.",
        "budget": 35,
        "publishedOn": "Apr 21, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Frenchs Forest NSW 2086, Australia",
        "state": null,
        "category": "Handyman",
        "status": "Open",
        "postedBy": "Hoang Hoey",
        "posterSlug": "hoang-hoey",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 2,
        "comments": 0
    }, {
        "name": "Pick up and delover milling machine",
        "slug": "pick-up-and-delover-milling-machine",
        "profileImg": "https://s3.ap-southeast-2.amazonaws.com/taskanything/user-profile/323971cac813fc426d9cf622f5a26eba.jpg",
        "description": "There is currently a milling machine in auction which im interested in. If im successful will need help to pick up the machine from Orange and deliver to my house in Wetherill Park. Machine is large and heavy - estimated at 1 ton, stands 2m tall and assume 1.5m wide and deep. There will be a crane onsite to help load the machine, however no help at my place. Will need a large truck with a lifting platform",
        "budget": 1000,
        "publishedOn": "Apr 21, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Orange NSW 2800, Australia",
        "state": null,
        "category": "Handyman",
        "status": "Payment Released",
        "postedBy": "Tuan D",
        "posterSlug": "tuan-d",
        "offerMadeBy": "Dave T",
        "offerorSlug": "dave-t",
        "bookmark": false,
        "offers": 1,
        "comments": 0
    }, {
        "name": "Cleaner",
        "slug": "cleaner",
        "profileImg": "https://s3.ap-southeast-2.amazonaws.com/taskanything/user-profile/077514926ae7ffd8387caf6ede938a0a.jpg",
        "description": "Looking for a cleaner to do a few chores around the house. Just general clean mainly of kitchen and bathroom. Can be weekly thing if it works out",
        "budget": 70,
        "publishedOn": "Apr 14, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Cremorne NSW 2090, Australia",
        "state": null,
        "category": "Cleaning",
        "status": "Open",
        "postedBy": "Jonty Barrett",
        "posterSlug": "jonty-barrett",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 0,
        "comments": 0
    }, {
        "name": "Show me how to weld",
        "slug": "show-me-how-to-weld",
        "profileImg": null,
        "description": "Ive just got a tig welder and want an experienced person to give me tips. Ive been practising on just scrap metal however in particular cant keep a straight arc when it comes to 90 degree joints. The arc wanders",
        "budget": 100,
        "publishedOn": "Apr 14, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Wetherill Park NSW 2164, Australia",
        "state": null,
        "category": "Handyman",
        "status": "Open",
        "postedBy": "Jerome Costanzo",
        "posterSlug": "jerome-costanzo",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 0,
        "comments": 0
    }, {
        "name": "Fix dent in wall",
        "slug": "fix-dent-in-wall",
        "profileImg": null,
        "description": "I have a dent in the wall which Ive tried to fix but it doesnt quite look right. After help to fix this properly. See photos attached",
        "budget": 80,
        "publishedOn": "Apr 14, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Haberfield NSW 2045, Australia",
        "state": null,
        "category": "Handyman",
        "status": "Open",
        "postedBy": "Libby Scarborough",
        "posterSlug": "libby-scarborough",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 0,
        "comments": 0
    }, {
        "name": "Commission a painter",
        "slug": "commission-a-painter",
        "profileImg": "https://s3.ap-southeast-2.amazonaws.com/taskanything/user-profile/51de7a5c0df2cf7f7385fd46f0ce1220.jpg",
        "description": "I would like someone to paint a canvass roughly 2m wide by 1m tall for a wall in my house. Nature theme. Experienced painters only please.",
        "budget": 200,
        "publishedOn": "Apr 14, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Bexley NSW 2207, Australia",
        "state": null,
        "category": "Other",
        "status": "Open",
        "postedBy": "Dave T",
        "posterSlug": "dave-t",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 1,
        "comments": 1
    }, {
        "name": "Remove diff",
        "slug": "remove-diff",
        "profileImg": "https://s3.ap-southeast-2.amazonaws.com/taskanything/user-profile/e1b45b23bcc83301e9974465480fca22.jpg",
        "description": "Ok this is a long shot. Currently trying to remove the diff on my carand i cant because one of the bolts has been stripped. Car has been on stands for 2 months now and im sick of it and have been defeated. rather get the car on the road. can anyone help?",
        "budget": 155,
        "publishedOn": "Apr 14, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Frenchs Forest NSW 2086, Australia",
        "state": null,
        "category": "Handyman",
        "status": "Open",
        "postedBy": "Hoang Hoey",
        "posterSlug": "hoang-hoey",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 0,
        "comments": 0
    }, {
        "name": "Pick up machine",
        "slug": "pick-up-machine",
        "profileImg": null,
        "description": "I've just bought a glute ham raise machine and need help picking this up and being delivered to my house. Pick up ingleburn and deliver to auburn. Will need a van or trailer of some sort",
        "budget": 100,
        "publishedOn": "Mar 28, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Ingleburn NSW 2565, Australia",
        "state": null,
        "category": "Removalist",
        "status": "Open",
        "postedBy": "Poon Arijba",
        "posterSlug": "poon-arijba",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 0,
        "comments": 0
    }, {
        "name": "Test task",
        "slug": "test-task",
        "profileImg": "https://s3.ap-southeast-2.amazonaws.com/taskanything/user-profile/9beaaac594b24a9e9041dc633feb34f1.jpg",
        "description": "Just a test task guys - I'm new to the platform and am just testing.&nbsp;",
        "budget": 50,
        "publishedOn": "Mar 28, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Wallacia NSW 2745, Australia",
        "state": null,
        "category": "Handyman",
        "status": "Open",
        "postedBy": "Tim Pritchard",
        "posterSlug": "tim-pritchard",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 1,
        "comments": 0
    }, {
        "name": "Move dirt to back",
        "slug": "move-dirt-to-back",
        "profileImg": null,
        "description": "We have 2 tonnes of soil at our front yard we need moved to the back. Side entrance is narrow and can only be accessed with wheelbarrow",
        "budget": 200,
        "publishedOn": "Mar 28, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Hornsby NSW 2077, Australia",
        "state": null,
        "category": "Handyman",
        "status": "Open",
        "postedBy": "Jacob Erubol",
        "posterSlug": "jacob-erubol",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 4,
        "comments": 1
    }, {
        "name": "Fix surfboard",
        "slug": "fix-surfboard",
        "profileImg": "https://s3.ap-southeast-2.amazonaws.com/taskanything/user-profile/1c70d6824ad1dc74bf37c61eca630703.jpg",
        "description": "There is a fist sized hole in my surfboard which I would like repaired. I dont hv any equipement, i can drop off then pick up board if easier",
        "budget": 60,
        "publishedOn": "Mar 28, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Sefton NSW 2162, Australia",
        "state": null,
        "category": "Handyman",
        "status": "Open",
        "postedBy": "Rich Caruana",
        "posterSlug": "rich-caruana",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 1,
        "comments": 0
    }, {
        "name": "Service car",
        "slug": "service-car",
        "profileImg": "https://s3.ap-southeast-2.amazonaws.com/taskanything/user-profile/7add7df501dfd9a5a102d24b27d076e5.jpg",
        "description": "I have a 2013 Bmw 320i and the warranty has just expired. only has 40k on the clock and I am after someone who can service it. been told it’s a minimum of $1000 by BMW and this is ridiculous for a car of this condition!",
        "budget": 150,
        "publishedOn": "Mar 28, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Maroubra NSW 2035, Australia",
        "state": null,
        "category": "Other",
        "status": "Open",
        "postedBy": "Tamara Devonish",
        "posterSlug": "tamara-devonish",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 1,
        "comments": 1
    }, {
        "name": "Install reversing camera",
        "slug": "install-reversing-camera",
        "profileImg": null,
        "description": "Hi, I have a reverse camera kit which i need installed in my car. There is electrical wiring involved so please need someone who knows what theyre doing.",
        "budget": 60,
        "publishedOn": "Mar 28, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Batemans Bay NSW 2536, Australia",
        "state": null,
        "category": "Handyman",
        "status": "Open",
        "postedBy": "Penny Trang",
        "posterSlug": "penny-trang",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 0,
        "comments": 0
    }, {
        "name": "Gardening",
        "slug": "gardening-4",
        "profileImg": "https://s3.ap-southeast-2.amazonaws.com/taskanything/user-profile/1a2090119804fe41737024231684f5c1.jpg",
        "description": "Hi, I would love some help to keep my front yard neat and tidy. No mowing required as i do this, just some hedge trimming, edging and a little bit of weeding. Also looking for helper to take away the garden waste and dispose",
        "budget": 80,
        "publishedOn": "Mar 28, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Frenchs Forest NSW 2086, Australia",
        "state": null,
        "category": "Gardening",
        "status": "Open",
        "postedBy": "Florence Jontsy",
        "posterSlug": "florence-jontsy",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 0,
        "comments": 0
    }, {
        "name": "Dusting and cleaning",
        "slug": "dusting-and-cleaning",
        "profileImg": null,
        "description": "Would like someone to help wipe down and dust the light fixtures in my house and also to clear cobwebs in the ceilings. Mainly in living room and rumpus",
        "budget": 80,
        "publishedOn": "Mar 28, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Holroyd NSW 2142, Australia",
        "state": null,
        "category": "Cleaning",
        "status": "Open",
        "postedBy": "Olivia Treescox",
        "posterSlug": "olivia-treescox",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 0,
        "comments": 0
    }, {
        "name": "dig a trench",
        "slug": "dig-a-trench-1",
        "profileImg": "https://s3.ap-southeast-2.amazonaws.com/taskanything/user-profile/323971cac813fc426d9cf622f5a26eba.jpg",
        "description": "We're having a deck built and need help digging a trench. About 30cm deep, 50cm wide and about 15m total length. Trench needs to be flat, pelase bring own tools.&nbsp;",
        "budget": 300,
        "publishedOn": "Mar 28, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Kingston ACT 2604, Australia",
        "state": null,
        "category": "Gardening",
        "status": "Open",
        "postedBy": "Tuan D",
        "posterSlug": "tuan-d",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 1,
        "comments": 0
    }, {
        "name": "Things around the house",
        "slug": "things-around-the-house",
        "profileImg": null,
        "description": "Hi, looking for a handyman to help with a few things around the house. There are 2 small holes in gyprock which we would like patched and paint matched, and also a sagging door we would like rehung",
        "budget": 150,
        "publishedOn": "Mar 6, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Windang NSW 2528, Australia",
        "state": null,
        "category": "Handyman",
        "status": "Open",
        "postedBy": "Jai T",
        "posterSlug": "jai-t",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 0,
        "comments": 0
    }, {
        "name": "Qigong teacher",
        "slug": "qigong-teacher",
        "profileImg": "https://s3.ap-southeast-2.amazonaws.com/taskanything/user-profile/456c88e8b29b452d5b0daba8418285c9.jpg",
        "description": "I'm interested in getting into qigong. Looking for a qigong teacher in the Wollongong area (sadly no luck thus far), am willing to travel to Sydney for the right teacher or if not happy to receive instruction via phone/web. Budget is per hour",
        "budget": 50,
        "publishedOn": "Mar 6, 2021",
        "published": true,
        "endDate": "As soon as possible",
        "location": "Sydney NSW, Australia",
        "state": null,
        "category": "Removalist",
        "status": "Open",
        "postedBy": "Tien Nguyen",
        "posterSlug": "tien-nguyen",
        "offerMadeBy": null,
        "offerorSlug": null,
        "bookmark": false,
        "offers": 0,
        "comments": 0
    }],
    "meta": {
        "pagination": {
            "total": 21,
            "count": 20,
            "per_page": 20,
            "current_page": 1,
            "total_pages": 2,
            "links": {
                "next": "https://api.taskanything.com.au/task-forum?page=2"
            }
        }
    }
  

  }
 
  filteredArray:Array<Object> = []
constructor()
{
 this.filteredArray = this.json1["data"];   
}

ngOnInit(){

}


UserInput(event:Event    )
   {
//   console.log(event);
  this.searcheditem =(<HTMLInputElement>event.target).value;
   }





searchingContent()
{
    console.log('searchcontent',this.searchcontent)
   


}

}

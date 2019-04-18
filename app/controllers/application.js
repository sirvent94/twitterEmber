import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	/* @tracked tweets = [
		{ id:1, userName:"Sirvent94", description:"hi"},
		{ id:2, userName:"Sirvent94", description:"hi"},
		{ id:3, userName:"Sirvent94", description:"hi"},
	];*/

	@action
	onSubmit (text){
		let post = this.store.createRecord('draft_tweet', {
			avatar: "https://pbs.twimg.com/profile_images/478571967809732608/gUMBaY9F_400x400.jpeg",
			user_name: "Sirvent94",
			description: text,
			created_at: "2019-04-18"
		});

		post.save();
	}
}
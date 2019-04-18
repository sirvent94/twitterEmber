import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Feed1Component extends Component {
	@tracked tweets = this.args.tweets || [];
}

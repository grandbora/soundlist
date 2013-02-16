Soundlist = Backbone.Collection.extend({
	
	getCurrentPlaying: function() {

		playing = this.where({isPlaying: true});

		if (0 === playing.length) return

		return playing[0]
	}

})
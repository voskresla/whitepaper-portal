block('image')(
	tag()('img'),
	addAttrs()(function() {
		var ctx = this.ctx;
		return this.extend(applyNext(),
			{
					role : undefined,
					src : ctx.url,
					width : ctx.width,
					height : ctx.height,
					alt : ctx.alt,
					title : ctx.title
			});
	})
);

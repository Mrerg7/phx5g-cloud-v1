export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === 'www.phx5g.cloud') {
      url.hostname = 'phx5g.cloud';
      return Response.redirect(url.href, 301);
    }

    return env.ASSETS.fetch(request);
  },
};

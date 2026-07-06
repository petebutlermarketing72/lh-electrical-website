module.exports = async function () {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("[googleReviews] GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID not set — falling back to static reviews.");
    return { reviews: [], rating: null, total: null, fetched: false };
  }

  try {
    const url =
      "https://maps.googleapis.com/maps/api/place/details/json" +
      `?place_id=${encodeURIComponent(placeId)}` +
      "&fields=reviews,rating,user_ratings_total" +
      `&key=${encodeURIComponent(apiKey)}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== "OK") {
      console.warn(`[googleReviews] Places API status: ${data.status}${data.error_message ? " — " + data.error_message : ""}`);
      return { reviews: [], rating: null, total: null, fetched: false };
    }

    const result = data.result || {};
    const reviews = (result.reviews || []).map((r) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      relativeTime: r.relative_time_description,
      profilePhoto: r.profile_photo_url,
    }));

    return {
      reviews,
      rating: result.rating || null,
      total: result.user_ratings_total || null,
      fetched: reviews.length > 0,
    };
  } catch (err) {
    console.warn("[googleReviews] Failed to fetch live reviews: " + err.message);
    return { reviews: [], rating: null, total: null, fetched: false };
  }
};

"use client";
import InstagramEmbed from "react-instagram-embed";

export default function InstagramFeed() {
  const posts = [
    "https://www.instagram.com/reel/C6Lq0J9NvwG/",
    "https://www.instagram.com/reel/C5yU4p9Ne4K/",
    "https://www.instagram.com/reel/C4X5GFGNtW7/",
  ];

  return (
    <section className="bg-[#fff8f4] py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#f58220] mb-8">
        Síguenos en Instagram 📸
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Mira cómo nuestros clientes envían sus paquetes con Globus Cargo.
      </p>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {posts.map((url, idx) => (
          <div
            key={idx}
            className="bg-white p-2 rounded-2xl shadow-md border border-[#f58220]/10"
          >
            <InstagramEmbed
              url={url}
              clientAccessToken="YOUR_APP_ID|YOUR_CLIENT_TOKEN"
              width={328}
            />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="https://www.instagram.com/globuscargo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#f58220] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#e07116] transition-all"
        >
          Ver más en Instagram
        </a>
      </div>
    </section>
  );
}
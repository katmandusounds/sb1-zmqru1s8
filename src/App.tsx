import React, { useState } from 'react';
import { Music2, Instagram, Youtube, BookText as TikTok, Play, Pause } from 'lucide-react';

function App() {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  const SpotifyTrack = ({ id, title }: { id: string; title: string }) => (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-teal-500/10 rounded-lg transform group-hover:scale-105 transition-all duration-300"></div>
      <iframe
        style={{ borderRadius: '12px' }}
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="relative z-10"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-teal-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative h-[70vh] rounded-3xl overflow-hidden mb-16">
          <img
            src="https://ik.imagekit.io/vv1coyjgq/275121796_456546309500379_8455407392131263190_n.jpg?updatedAt=1738014607318"
            alt="KatManDu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
            <div className="absolute bottom-0 left-0 p-8 md:p-16">
              <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-teal-500 mb-4">
                KatManDu
              </h1>
              <p className="text-white/80 text-xl md:text-2xl max-w-2xl">
                I am a music producer, artist, DJ, and studio engineer. KatManDu, the brand, has been in the scene since 2015. I specialize in creating music in the BPMs of 120-160, blending influences from rap, drill, grime, baile funk, afrobeats, and Jersey club. My goal is to push boundaries and create innovative sounds that resonate globally
              </p>
            </div>
          </div>
        </div>

        {/* Latest Releases */}

    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2pUGpqLvcCBOEuO92eXLMS?utm_source=generator" width="100%" height="152" loading="lazy"></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jHFEFDJLEu0?si=6gpEGqUV4ojdi8LY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-8">
            Latest Releases
          </h2>
          <div className="space-y-6">
            <SpotifyTrack id="2pUGpqLvcCBOEuO92eXLMS" title="Sturdy" />
            <SpotifyTrack id="5aJ7cMRKGlNwe4Mpl7aNot" title="Falling in Love" />
          </div>
        </section>

        {/* Spotify Artist Profile */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-8">
            Artist Profile
          </h2>
          <div className="bg-black/30 p-1 rounded-xl backdrop-blur-sm">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/1255i2Jr7gEHyppuqmnsm5?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>

        {/* Produced Playlist */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-8">
            Produced by KatManDu
          </h2>
          <div className="bg-black/30 p-1 rounded-xl backdrop-blur-sm">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/6ZDiTpfDayBYwdzuFw7axg?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>

        {/* Social Links */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-8">
            Connect with Me
          </h2>
          <div className="flex justify-center gap-8">
            <a
              href="https://instagram.com/katmandusounds"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="p-4 rounded-full bg-gradient-to-br from-purple-600 to-teal-500 group-hover:scale-110 transition-transform duration-300">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <span className="mt-2 text-white/80 group-hover:text-white">Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@katmandusounds"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="p-4 rounded-full bg-gradient-to-br from-purple-600 to-teal-500 group-hover:scale-110 transition-transform duration-300">
                <TikTok className="w-8 h-8 text-white" />
              </div>
              <span className="mt-2 text-white/80 group-hover:text-white">TikTok</span>
            </a>
            <a
              href="https://www.youtube.com/@KatManDuSounds"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="p-4 rounded-full bg-gradient-to-br from-purple-600 to-teal-500 group-hover:scale-110 transition-transform duration-300">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <span className="mt-2 text-white/80 group-hover:text-white">YouTube</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

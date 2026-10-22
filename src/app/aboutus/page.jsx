
import Link from "next/link";
import {
  FiSun,
  FiShoppingBag,
  FiHeart,
  FiShield,
  FiTruck,
  FiArrowRight,
} from "react-icons/fi";

const features = [
  {
    icon: FiShoppingBag,
    title: "Summer Essentials",
    description:
      "Discover sunglasses, summer fashion, skincare, and beach accessories for every summer adventure.",
  },
  {
    icon: FiShield,
    title: "Quality You Can Trust",
    description:
      "We focus on quality products, clear product information, and a smooth shopping experience.",
  },
  {
    icon: FiTruck,
    title: "Easy Shopping",
    description:
      "Explore your favorite summer products with a simple and convenient shopping experience.",
  },
  {
    icon: FiHeart,
    title: "Made for Your Summer",
    description:
      "Find products that help you stay comfortable, refreshed, and ready to enjoy sunny days.",
  },
];

export default function AboutUs() {
  return (
    <main className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              <FiSun />
              Welcome to SunCart
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Make Every Summer
              <span className="block text-emerald-600">
                A Little Brighter.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              SunCart is your destination for summer essentials. From stylish
              accessories and beach-ready outfits to refreshing skincare,
              discover products that make every sunny day more enjoyable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Explore Products
                <FiArrowRight />
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-emerald-200/40 blur-2xl" />

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
              alt="Beautiful sunny summer beach"
              className="relative h-72 w-full rounded-3xl object-cover shadow-2xl sm:h-96"
            />

            <div className="absolute -bottom-5 left-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl sm:left-8">
              <p className="text-sm text-slate-500">
                Your summer, your style
              </p>
              <p className="mt-1 font-bold text-emerald-700">
                Discover. Enjoy. Shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
          Our Story
        </span>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Everything You Need for a Sunny Day
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">
          We created SunCart around one simple idea: shopping for summer
          essentials should be easy, enjoyable, and inspiring. Our store brings
          together seasonal products in one convenient place, helping you find
          items for beach trips, outdoor adventures, everyday comfort, and
          personal care.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-700">
              <FiHeart />
            </div>

            <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>

            <p className="mt-4 leading-8 text-slate-600">
              To make seasonal shopping more convenient by bringing together
              useful, stylish, and summer-ready products in a friendly online
              store.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-orange-600">
              <FiSun />
            </div>

            <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>

            <p className="mt-4 leading-8 text-slate-600">
              To create a delightful shopping destination where discovering
              summer essentials feels effortless and every customer can shop
              with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Why SunCart?
          </span>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Your Summer Shopping, Simplified
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Everything comes together to help you prepare for the sunny season.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready for Your Summer Adventure?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-emerald-50">
            Find your seasonal favorites and get ready to make the most of
            every sunny moment with SunCart.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-emerald-700 transition hover:-translate-y-0.5 hover:bg-emerald-50"
          >
            Start Shopping
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

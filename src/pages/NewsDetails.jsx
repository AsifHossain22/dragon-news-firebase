import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homelayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header className="py-3">
        <Header />
      </header>

      <main className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 px-4">
        <section className="col-span-1 lg:col-span-9">
          <h2 className="font-bold mb-5 text-xl">News Details</h2>
          <NewsDetailsCard news={news} />
        </section>

        <aside className="hidden lg:block lg:col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;

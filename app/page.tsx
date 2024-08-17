"use client"
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import "./home.css";


export default function Home() {
  return (
    <div className="content-wrapper">
      <Navbar />
      <Header />
      <MovieList />
    </div>
  );
}

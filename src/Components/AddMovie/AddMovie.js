import React, { useState } from "react";  
import styles from './AddMovie.module.css'
  
const AddMovie = (props) => {  
  
    const { movies, setMovies } = props;  
  
  
    const [title, setTitle] = useState("");  
    const [date, setDate] = useState("");  
    const [link, setLink] = useState("");
    const [genre, setGenre] = useState("");

    const handleTitle = (e) => {  
        setTitle(e.target.value);  
        console.log(title);  
    };  
  
    const handleDate = (e) => {  
        setDate(e.target.value);  
        console.log(date);  
    };  
    
    const handleLink = (e) => {
        setLink(e.target.value);
        console.log();
    };

    const handleGenre = (e) => {
        setGenre(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title === "" && date === "") { alert("title dan date kosong") }
        else if (title === "") { alert("title kosong") } 
        else if (date === "") { alert("date kosong") } 
        else if (genre === "") { alert("genre kosong") } 
        else {
            const movie = {
                id: 4,
                title: title,
                date: date,
                image: link,
                genre: genre
            }
            setMovies([...movies, movie])
        }
    }
  
    const genreOpsi = ["Action", "Comedy", "Drama", "Sci-Fi", "Romance", "Thriller", "Adventure", "Fantasy", "Animation", "Horror", "Mystery", "History", "Crime", "Sport"]; 

  return (  
    <div className={styles.container}>  
      <form className={styles.addmovie} onSubmit={handleSubmit}>  
        <input placeholder="Masukkan Judul" className={styles.addmovie__input} id="title" type="text" value={title} onChange={handleTitle}/> 
        <input placeholder= "Masukkan Link Gambar"className={styles.addmovie__input} id="link" type="text" value={link} onChange={handleLink}/>
        <input className={styles.addmovie__date} id="date" type="date" value={date} onChange={handleDate} /> 
        <select className={styles.addmovie__select} id='genre' value={genre} onChange={handleGenre} placeholder="Masukkan genre">
            <option value="" disabled>Pilih Genre</option>
             {genreOpsi.map((option, index) => (
            <option key={index} value={option}>{option}</option>
             ))}
        </select> 
        <button className={styles.addmovie__button}>Simpan</button> 
      </form>  
    </div>  
  );  
};  
  
export default AddMovie;

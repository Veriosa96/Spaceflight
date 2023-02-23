import {useState, useEffect} from "react"
import {Container, Row, Card,Button} from"react-bootstrap"
import {ArticleList} from "../interfaces/list"
import {Link} from "react-router-dom"


const HomePage =()=> {
const url = "https://api.spaceflightnewsapi.net/v3/articles"
const [article,setArticle] = useState<ArticleList[]>([])
const fetchArticle = async () => {
    try {
        const response = await fetch(url)
        if (response.ok){
            const apiArt = await response.json()
            setArticle(apiArt)
        } else {
            console.log("stai facendo una minchiata")
        }
    } catch (error) {
        console.log(error)
    }
}
useEffect (()=>{
    fetchArticle()
},[])


    return(
        <Container className="mb-3">
            <Row>
                {article.map ((art)=>(
                        <Card>
                        <Card.Img variant="top" src={art.imageUrl} style={{width:"15rem"}} />
                        <Card.Body>
                          <Card.Title>{art.title}</Card.Title>
                          <Card.Text>{art.publishedAt}
                          </Card.Text>
                          <Button variant="primary"><Link to={"/SingleArticle"}> Go somewhere</Link></Button>
                        </Card.Body>
                      </Card>
                ))}
            </Row>
        </Container>
    )
}

export default HomePage
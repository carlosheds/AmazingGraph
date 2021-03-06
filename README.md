# Credits
<details><summary>CLICK</summary>
  <p>
<br />
<p align="center">
  <a href="http://www.freepik.com">
    <img src="https://trello-attachments.s3.amazonaws.com/590fa896d2d25e50583de620/874x512/2bc76fc9373587c9d5ca571d19530719/4435_1.png" alt="Logo" width="250" height="150">
  </a>

  <h3 align="center">Amazing Graph</h3>

  <p align="center">
    Landing page to create amazing graphics
       <br />
    <br />
    <a href="https://github.com/Lorenalgm/AmazingGraph">Challenge</a>
    ·
    <a href="https://www.linkedin.com/in/lorenagmontes/">Contact</a>
  </p>
</p>



# Welcome :)
<a href="https://devchallenge.now.sh/"> DevChallenge</a> allow you to improve your skills!

# Challenge
Your challenge is to build a landing page about a website that create graphics.<br><br>
Seu desafio é criar uma página sobre um site de criação de gráficos.

<img src="https://trello-attachments.s3.amazonaws.com/590fa7f5a8ab015d0cf88052/590fa896d2d25e50583de620/cb82a7069f698bde3bafb4ea20316951/mockuper_(1)_(1).png" width="380" height="380">

# Techs: 
HTML<br>
CSS

# Getting start:
1 - Use this template or download this repository with the starter code<br>
2 - Read the instructions in readme.md<br>
3 - Start coding!<br>
4 - Share your results with the community :)<br>
<br>
1 - Use esse template ou baixe esse repositório com o código inicial<br>
2 - Leia as instruções no readme.md<br>
3 - Comece a codar!<br>
4 - Compartilhe seu resultado com a comunidade :)<br>


# Requirements:
- Your page should get it looking as close to the design as possible<br>
- Your page should be responsive<br>
<br>

- Sua página deve se parecer o mais próximo possível do design<br>
- Sua página deve ser responsiva<br>


<img src="https://trello-attachments.s3.amazonaws.com/590fa7f5a8ab015d0cf88052/590fa896d2d25e50583de620/255f1d04baf02f7e818c6e4ec36ddddf/desktop.png" width="380" height="380">


Feel free to use any workflow you are comfortable with :)

# Colors:
Orange: #D2872C<br>
Gray: #766F68

# Design:
Design available in `./design` path<br>
Images available in `./assets` path<br>
<br>
Modelo disponível na pasta `./design`<br>
Imagens disponíveis na pasta `./assets`<br>

# Font family:
- Roboto

# Share!
Initialize your project with this template in your github as a public repository<br>
Capture a screenshot, gif or video and share your result in Linkedin<br>
Send me a feedback in  <a href="https://www.linkedin.com/in/lorenagmontes/">Linkedin</a>!<br>

Designed and created by  <a href="https://github.com/Lorenalgm">Lorena</a> :)

</p>
</details>

# [Result](https://carlosheds.github.io/AmazingGraph/)

# Choices
## Mobile
Comecei por aqui (mobile first). Foi a parte menos complicada, apenas apliquei um ```display:flex;``` juntamente com ```flex-direction:column;``` na classe ```.container``` que continha as tags ```<header>, <section> ``` do site.<p>Coloquei a imagem numa ```<img>``` dentro da ```<section>```. O botão do menu adicionei criando 4 ```<div>``` sem conteúdo no html e tirei o display da ```<nav>``` via CSS. Adicionei uma funcionalidade simples que aprendi essa semana com Javascript, onde ao clicar no botão do menu,faz aparecer uma ```<div>``` com o conteúdo da ```<nav>``` dentro.</p>

## Responsive
Primeiramente tentei fazer com ```display:grid;```,porém sem sucesso pois não consegui deixar parecido com o exercício proposto (com o título ficando por cima da imagem).Removi o display da tag de ```<img>``` e coloquei a imagem via CSS como imagem de fundo ```background-image:;```.<p>Criei um ```@media(min-width:769px)``` e outro ```@media (min-width:770px) and (max-width:1400px)``` pois achei que o texto deveria se adaptar melhor a imagem de fundo sem que atrapalhe a legibilidade.

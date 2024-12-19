const { createApp } = Vue;

createApp({
  template: `
  <div id="datos">

      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
          <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>


      <table> 
        <tr>
            <td><h3>Nombre</h3></td>            
            <td><h3>Localidad</h3></td>            
            <td><h3>Puntos</h3></td>                 
            <td><h3>Imagen</h3></td> 
            <td><h3>Video</h3></td>     
        </tr>
        <tr v-for="vista in paginatedVistas":key="vista.id">
            <td> {{vista.Nombre}}</td>
            <td> {{vista.Localidad}}</td>
            <td> {{vista.Puntos.toLocaleString() }} Puntos</td>
            <td><img :src="vista.imagen" :alt="vista.Nombre" width="230" height="230"/></td>
            <td>
              <video :src="vista.video" alt="video" controls width="230" height="230"></video>   
            </td>
        </tr>
    </table>

      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
          <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>
  `,
  data() {
    return {
      vistas: [
        { id: 1, Nombre: "Amanecer morado", Puntos: 10, Localidad: "Donosti" , imagen: "img/AmanecerMorado2.webp", video: "img/control.mp4"},
        { id: 2, Nombre: "Atardecer destello", Puntos: 8, Localidad: "Donosti", imagen: "img/AtardecerDestello1.webp", video: "img/control.mp4" },
        { id: 3, Nombre: "Atardecer destello mar", Puntos: 9, Localidad: "Donosti", imagen: "img/AtardecerDestelloMar1.webp", video: "img/control.mp4" },
        { id: 4, Nombre: "Atardecer rojo", Puntos: 9, Localidad: "Donosti", imagen: "img/AtardecerRojo1.webp", video: "img/control.mp4" },
        { id: 5, Nombre: "Atardecer rojo full", Puntos: 10, Localidad: "Donosti", imagen: "img/AtardecerRojoFull1.webp", video:"img/control.mp4" },
        { id: 6, Nombre: "Atardecer rosado", Puntos: 8, Localidad: "Donosti", imagen: "img/AtardecerRosado1.webp", video:"img/control.mp4" },
        { id: 7, Nombre: "Destello blanco", Puntos: 7, Localidad: "Covadonga", imagen: "img/DestelloBlanco1.webp", video: "img/control.mp4" },
        { id: 8, Nombre: "Mar", Puntos: 7, Localidad: "Donosti", imagen: "img/Mar1.webp", video: "img/control.mp4" },
        { id: 9, Nombre: "Montañas sol", Puntos: 7, Localidad: "La Rioja", imagen: "img/MontañasSol1.webp", video:"img/control.mp4" },
        { id: 10, Nombre: "Montaña sol nube", Puntos: 9, Localidad: "La Rioja", imagen: "img/MontañasSolNube1.webp", video:"img/control.mp4" },
        { id: 11, Nombre: "Cielo rosado", Puntos: 8, Localidad: "Donosti", imagen: "img/CieloRosado1.webp", video:"img/control.mp4" },
        { id: 12, Nombre: "Sol", Puntos: 6, Localidad: "Galicia", imagen: "img/Sol1.webp", video:"img/control.mp4" },
        { id: 13, Nombre: "Sol Atardecer", Puntos: 7, Localidad: "Donosti", imagen: "img/SolAtardecer1.webp", video:"img/control.mp4" },
        { id: 14, Nombre: "Sol santo", Puntos: 9, Localidad: "Donosti", imagen: "img/SolSanto1.webp", video: "img/control.mp4" },
        { id: 15, Nombre: "Torre amanecer", Puntos: 8, Localidad: "Lisboa", imagen: "img/TorreAmanecer1.webp", video:"img/control.mp4" }
      ],
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.vistas.length / this.itemsPerPage);
    },
    paginatedVistas() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.vistas.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');

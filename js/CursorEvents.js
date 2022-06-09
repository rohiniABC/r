AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      this.handleClickEvents();
    },
    handlePlacesListState: function () {
      
      const id = this.el.getAttribute("id");
      const placesId = ["school", "library", "bus", "classroom"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      //Cursor 'mouseenter' Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleClickEvents: function() {
      //  Click Events
      this.el.addEventListener("click", evt => {
        const placesContainer = document.querySelector("#places-container");
        const { state } = placesContainer.getAttribute("school-environment");
  
        if (state === "places-list") {
          const id = this.el.getAttribute("id");
          const placesId = [
            "bus",
            "school",
            "library",
            "classroom"
          ];
          if (placesId.includes(id)) {
            placesContainer.setAttribute("school-environment", {
              state: "view",
              selectedCard: id
            });
          }
        }
        if(state==="view"){
          this.handelViewState();
        }
        if(state==="change-view"){
          this.handelViewState();
        }
      });
    },
    handelViewState:function(){
      const el=this.el;
      const id=el.getAttribute("id");
      const placesContainer=document.querySelector("#places-container");
      const{selectedItemId}=placesContainer.getAttribute("cursor-listener");
      
      if(sideViewPlacesId.includes(id)){
        placesContainer.setAttribute("school-environment",{
          state:"change-view"
        });
        const skyEl=document.querySelector("#main-container");
        skyEl.setAttribute("material",{
          src:`./assets/360_images/${selectedItemId}/${id}.jpg`,
          clor:"#fff"
        })
      }
    },
    handleMouseLeaveEvents: function () {
      //Cursor 'mouseleave' Events
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },
  });

 
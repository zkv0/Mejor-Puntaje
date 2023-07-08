

function toggleVideo(button, videoDiv, videoUrl) {
    button.addEventListener("click", function() {
      videoDiv.classList.toggle("span_video");
      videoDiv.innerHTML = `<iframe class="video" src="${videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      videoDiv.parentElement.classList.toggle("div_botonvideo_grande");
    });
  }
  
  // Llamadas a la función toggleVideo para cada botón y video correspondiente
  toggleVideo(
    document.getElementById("Conocimiento_Geográfico"),
    document.getElementById("Conocimiento_Geográfico_video"),
    "https://www.youtube-nocookie.com/embed/EuVEhJog2Vc"
  );
  
  toggleVideo(
    document.getElementById("Conceptos_de_Geografía"),
    document.getElementById("Conceptos_de_Geografía_video"),
    "https://www.youtube-nocookie.com/embed/w19v7E33YgQ"
  );
  
  toggleVideo(
    document.getElementById("Continentes_y_Océanos"),
    document.getElementById("Continentes_y_Océanos_video"),
    "https://www.youtube-nocookie.com/embed/1QIeXJSV12I"
  );
  
  toggleVideo(
    document.getElementById("El_Clima"),
    document.getElementById("El_Clima_video"),
    "https://www.youtube-nocookie.com/embed/fz4tYc5pAdI"
  );
  
  toggleVideo(
    document.getElementById("Conocimiento_Histórico"),
    document.getElementById("Conocimiento_Histórico_video"),
    "https://www.youtube-nocookie.com/embed/gV6Ow_ffbs8"
  );
  
  toggleVideo(
    document.getElementById("Edad_antigua"),
    document.getElementById("Edad_antigua_video"),
    "https://www.youtube-nocookie.com/embed/60SkTk8zfOs"
  );
  
    toggleVideo(
      document.getElementById("Edad_media"),
      document.getElementById("Edad_media_video"),
      "https://www.youtube-nocookie.com/embed/IwhnjdSoeoY"    
  );
  
  
  toggleVideo(
    document.getElementById("Civilizaciones_prehispánicas"),
    document.getElementById("Civilizaciones_prehispánicas_video"),
    "https://www.youtube-nocookie.com/embed/IhBH1M2kH4Y"
  );
  
  toggleVideo(
    document.getElementById("Conquista_de_América"),
    document.getElementById("Conquista_de_América_video"),
    "https://www.youtube-nocookie.com/embed/sMBQpGemnNU"    
  );
  toggleVideo(
    document.getElementById("Independencia_en_América_Latina"),
    document.getElementById("Independencia_en_América_Latina_video"),
    "https://www.youtube-nocookie.com/embed/B2y-bCDOBTs"
  );
  
  toggleVideo(
    document.getElementById("Ilustración_y_las_revoluciones_burguesas"),
    document.getElementById("Ilustración_y_las_revoluciones_burguesas_video"),
    "https://www.youtube-nocookie.com/embed/DTfjtqp7JuU"
  );
  
  toggleVideo(
    document.getElementById("El_Renacimientoa"),
    document.getElementById("El_Renacimientoa_video"),
    "https://www.youtube-nocookie.com/embed/bnMIuDDedvY"
  );
  
  toggleVideo(
    document.getElementById("Primera_guerra_mundial"),
    document.getElementById("Primera_guerra_mundial_video"),
    "https://www.youtube-nocookie.com/embed/YQNGCG7ivlg" 
  );
  
  toggleVideo(
    document.getElementById("Segunda_guerra_mundial"),
    document.getElementById("Segunda_guerra_mundial_video"),
    "https://www.youtube-nocookie.com/embed/AOOraEDe7DI" 
  );
  
  toggleVideo(
    document.getElementById("La_guerra_fría"),
    document.getElementById("La_guerra_fría_video"),
    "https://www.youtube-nocookie.com/embed/fiIebW5rk7c" 
  );
  toggleVideo(
    document.getElementById("Edad_contemporanea_Siglo_XIX"),
    document.getElementById("Edad_contemporanea_Siglo_XIX_video"),
    "https://www.youtube-nocookie.com/embed/s9HwH8oKg9A"
  );
  
  toggleVideo(
    document.getElementById("Historia_de_Colombia_parte_I"),
    document.getElementById("Historia_de_Colombia_parte_I_video"),
    "https://www.youtube-nocookie.com/embed/k7xpU2qboSE"
  );
  
  toggleVideo(
    document.getElementById("Historia_de_Colombia_parte_II"),
    document.getElementById("Historia_de_Colombia_parte_II_video"),
    "https://www.youtube-nocookie.com/embed/Fh5NdMAWj7A" 
  );
  
  toggleVideo(
    document.getElementById("Historia_de_Colombia_parte_III"),
    document.getElementById("Historia_de_Colombia_parte_III_video"),
    "https://www.youtube-nocookie.com/embed/N6jMbk5XeXg" 
  );
  
  toggleVideo(
    document.getElementById("Historia_de_Colombia_IV"),
    document.getElementById("Historia_de_Colombia_IV_video"),
    "https://www.youtube-nocookie.com/embed/lqVhQo1jcl8" 
  );
  
  toggleVideo(
    document.getElementById("Sistema_político_y_económico_internacional"),
    document.getElementById("Sistema_político_y_económico_internacional_video"),
    "https://www.youtube-nocookie.com/embed/yRD53myP27g" 
  );
  
  toggleVideo(
    document.getElementById("Economía_y_modos_de_producción"),
    document.getElementById("Economía_y_modos_de_producción_video"),
    "https://www.youtube-nocookie.com/embed/QIHud5PVweQ"
  );
  
  
  toggleVideo(
    document.getElementById("Capitalismo"),
    document.getElementById("Capitalismo_video"),
    "https://www.youtube-nocookie.com/embed/aCV3x8APkgg" 
  );
  
  toggleVideo(
    document.getElementById("Estado_democracia_y_formas_de_gobierno"),
    document.getElementById("Estado_democracia_y_formas_de_gobierno_video"),
    "https://www.youtube-nocookie.com/embed/8fSN0OQU5-U"
  );
  
  toggleVideo(
    document.getElementById("Organización_del_estado_Colombiano"),
    document.getElementById("Organización_del_estado_Colombiano_video"),
    "https://www.youtube-nocookie.com/embed/K41R9YvrLqw"
  );
  
  toggleVideo(
    document.getElementById("Derecho_internacional_público"),
    document.getElementById("Derecho_internacional_público_video"),
    "https://www.youtube-nocookie.com/embed/32tPD0gV2hM"
  );
  
  toggleVideo(
    document.getElementById("Derecho_internacional_humanitario"),
    document.getElementById("Derecho_internacional_humanitario_video"),
    "https://www.youtube-nocookie.com/embed/_TwjK1ilvTo"
  );
  
  toggleVideo(
    document.getElementById("Problemas_actuales_del_mundo"),
    document.getElementById("Problemas_actuales_del_mundo_video"),
    "https://www.youtube-nocookie.com/embed/TGKnhMqhKHQ"
  );
  
  toggleVideo(
    document.getElementById("Sobre_la_Geografia"),
    document.getElementById("Sobre_la_Geografia_video"),
    "https://www.youtube-nocookie.com/embed/I01jgVgv-Lo"
  );
  
  toggleVideo(
    document.getElementById("Los_continentes"),
    document.getElementById("Los_continentes_video"),
    "https://www.youtube.com/embed/kSFYbHMao5w"
  );
  
  toggleVideo(
    document.getElementById("El_climad"),
    document.getElementById("El_climad_video"),
    "https://www.youtube.com/embed/MKMq_qxwSNA"
  );
  
  toggleVideo(
    document.getElementById("etapas_históricas_y_edad_antigua"),
    document.getElementById("etapas_históricas_y_edad_antigua_video"),
    "https://www.youtube.com/embed/hc8il9zK8P0"
  );
  
  toggleVideo(
    document.getElementById("Civilizaciones_prehispánicas_y_edad_media"),
    document.getElementById("Civilizaciones_prehispánicas_y_edad_media_video"),
    "https://www.youtube.com/embed/cwwbexrUlOw"
  );
  
  toggleVideo(
    document.getElementById("Transformaciones"),
    document.getElementById("Transformaciones_video"),
    "https://www.youtube.com/embed/W7uFQYnbkf0"
  );
  
  toggleVideo(
    document.getElementById("Invasión_conquista_y_colonización_de_américa"),
    document.getElementById("Invasión_conquista_y_colonización_de_américa_video"),
    "https://www.youtube.com/embed/_fxDeQrXjPg"
  );
  
  toggleVideo(
    document.getElementById("Proceso_de_independencia_en_américa_latina"),
    document.getElementById("Proceso_de_independencia_en_américa_latina_video"),
    "https://www.youtube.com/embed/upKWAA9cbiA"
  );
  
  toggleVideo(
    document.getElementById("ilustracion_burgueses"),
    document.getElementById("ilustracion_burgueses_video"),
    "https://www.youtube.com/embed/TzePBQvWcRI"
  );
  
  toggleVideo(
    document.getElementById("Primera_guerra"),
    document.getElementById("Primera_guerra_video"),
    "https://www.youtube.com/embed/s54IlvhFB6I"
  );
  
  toggleVideo(
    document.getElementById("Segunda_Guerra"),
    document.getElementById("Segunda_Guerra_video"),
    "https://www.youtube.com/embed/pBLgNjBu_Jc"
  );
  
  toggleVideo(
    document.getElementById("guerra_fría"),
    document.getElementById("guerra_fría_video"),
    "https://www.youtube.com/embed/jiwKx1mKs_Y"
  );
  
  toggleVideo(
    document.getElementById("Guerra_Fría_II"),
    document.getElementById("Guerra_Fría_II_video"),
    "https://www.youtube.com/embed/R3-qi9_vr3M"
  );
  
  toggleVideo(
    document.getElementById("Edad_contemporánea"),
    document.getElementById("Edad_contemporánea_video"),
    "https://www.youtube.com/embed/TPNrMQfLQtY"
  );
  
  toggleVideo(
    document.getElementById("Revoluciones_xx"),
    document.getElementById("Revoluciones_xx_video"),
    "https://www.youtube.com/embed/zhq5d3e8bo8"
  );
  
  toggleVideo(
    document.getElementById("Economías_modo_de_producción"),
    document.getElementById("Economías_modo_de_producción_video"),
    "https://www.youtube.com/embed/bPtCkVvM3Z4"
  );
  
  toggleVideo(
    document.getElementById("El_sistema_político_internacional"),
    document.getElementById("El_sistema_político_internacional_video"),
    "https://www.youtube.com/embed/mV9UHXQNwJg"
  );
  
  toggleVideo(
    document.getElementById("Estado_democracia_formas_gobierno"),
    document.getElementById("Estado_democracia_formas_gobierno_video"),
    "https://www.youtube.com/embed/Rhf3W1RYXfk"
  );
  
  toggleVideo(
    document.getElementById("HISTORIA_DE_COLOMBIA_I"),
    document.getElementById("HISTORIA_DE_COLOMBIA_I_video"),
    "https://www.youtube.com/embed/TVRoV604n0o"
  );
  
  toggleVideo(
    document.getElementById("Historia_de_colombia_II"),
    document.getElementById("Historia_de_colombia_II_video"),
    "https://www.youtube.com/embed/xP6jHqnsv4Q"
  );
  toggleVideo(
    document.getElementById("Historia_de_Colombia_III"),
    document.getElementById("Historia_de_Colombia_III_video"),
    "https://www.youtube.com/embed/IECOiFmRQIU"
  );
  toggleVideo(
    document.getElementById("Historia_de_Colombia_IV"),
    document.getElementById("Historia_de_Colombia_IV_video"),
    "https://www.youtube.com/embed/-itzPdBrxSw"
  );
  toggleVideo(
    document.getElementById("Organización_estado_Colombiano"),
    document.getElementById("Organización_estado_Colombiano_video"),
    "https://www.youtube.com/embed/_E958l_M9V4"
  );
  toggleVideo(
    document.getElementById("Constitución_Política"),
    document.getElementById("Constitución_Política_video"),
    "https://www.youtube.com/embed/8zXr2qCuXsE"
  );
  toggleVideo(
    document.getElementById("Mecanismo_Protección"),
    document.getElementById("Mecanismo_Protección_video"),
    "https://www.youtube.com/embed/L3omu30bY_k"
  );
  
  toggleVideo(
    document.getElementById("Derecho_internacional_humanitarioo"),
    document.getElementById("Derecho_internacional_humanitarioo_video"),
    "https://www.youtube.com/embed/HAWY41FfJ7E"
  );
  toggleVideo(
    document.getElementById("Psicología_Social"),
    document.getElementById("Psicología_Social_video"),
    "https://www.youtube.com/embed/_uj4TEa3pl4"
  );
  toggleVideo(
    document.getElementById("Mecanismos_Alternativos"),
    document.getElementById("Mecanismos_Alternativos_video"),
    "https://www.youtube.com/embed/HFppabrh0UQ"
  );
  toggleVideo(
    document.getElementById("Competencias_ciudadanasss"),
    document.getElementById("Competencias_ciudadanasss_video"),
    "https://www.youtube.com/embed/W9PUSWFByAQ"
  );
  toggleVideo(
    document.getElementById("Práctica_competencias"),
    document.getElementById("Práctica_competencias_video"),
    "https://www.youtube.com/embed/2auyr2cnwm0"
  );


  toggleVideo(
    document.getElementById("Reppsj_soccles"),
    document.getElementById("Reppsj_soccles_video"),
    "https://www.youtube.com/embed/pZVy6vUSdBY"
  );
  toggleVideo(
    document.getElementById("Repasoiiciales"),
    document.getElementById("Repasoiiciales_video"),
    "https://www.youtube.com/embed/EZVf0B2mcPw"
  );
  toggleVideo(
    document.getElementById("Repasoiiisociales"),
    document.getElementById("Repasoiiisociales_video"),
    "https://www.youtube.com/embed/cXO8SfxzBdI"
  );
  toggleVideo(
    document.getElementById("Repasiiiisociales"),
    document.getElementById("Repasiiiisociales_video"),
    "https://www.youtube.com/embed/2EBAmCK9N88"
  );
  toggleVideo(
    document.getElementById("Ecoloasdecosistemas"),
    document.getElementById("Ecoloasdecosistemas_video"),
    "https://www.youtube.com/embed/kPZxZhD4NVA"
  );
  toggleVideo(
    document.getElementById("Biología_volución"),
    document.getElementById("Biología_volución_video"),
    "https://www.youtube.com/embed/PhY2f8I4zww"
  );
  toggleVideo(
    document.getElementById("Biología____ecológicas"),
    document.getElementById("Biología____ecológicas_video"),
    "https://www.youtube.com/embed/Q6LjNzlnHDY"
  );
  toggleVideo(
    document.getElementById("BioloConservación_energía"),
    document.getElementById("BioloConservación_energía_video"),
    "https://www.youtube.com/embed/65K8eK12W2E"
  );
  toggleVideo(
    document.getElementById("Biología_Ecología_I"),
    document.getElementById("Biología_Ecología_I_video"),
    "https://www.youtube.com/embed/pAcEIrzjYFY"
  );
  toggleVideo(
    document.getElementById("Biología_Ecología_II"),
    document.getElementById("Biología_Ecología_II_video"),
    "https://www.youtube.com/embed/9ZWSla5YQDM"
  );
  toggleVideo(
    document.getElementById("Biología_Ecología_III"),
    document.getElementById("Biología_Ecología_III_video"),
    "https://www.youtube.com/embed/mny8vxD0WWs"
  );
  toggleVideo(
    document.getElementById("Biologíaiiiiasjdk"),
    document.getElementById("Biologíaiiiiasjdk_video"),
    "https://www.youtube.com/embed/V3KNxAVse9o"
  );
  toggleVideo(
    document.getElementById("INFLUENCIAHUMANAECOSISTEMA"),
    document.getElementById("INFLUENCIAHUMANAECOSISTEMA_video"),
    "https://www.youtube.com/embed/SQdsb1S_ZcQ"
  );



  toggleVideo(
    document.getElementById("Clasificaciónkjadfdelosseresvivos"),
    document.getElementById("Clasificaciónkjadfdelosseresvivos_video"),
    "https://www.youtube.com/embed/PiWEH2UV7QI"
  );
  toggleVideo(
    document.getElementById("Clasificaciónkjadfdelosseresvivosasldjklkfs"),
    document.getElementById("Clasificaciónkjadfdelosseresvivosasldjklkfs_video"),
    "https://www.youtube.com/embed/jlQFF89Km50"
  );
  toggleVideo(
    document.getElementById("Lasssplantas"),
    document.getElementById("Lasssplantas_video"),
    "https://www.youtube.com/embed/U8kz25EZqNE"
  );
  toggleVideo(
    document.getElementById("FOTOSÍNTESISdlssdasdf"),
    document.getElementById("FOTOSÍNTESISdlssdasdf_video"),
    "https://www.youtube.com/embed/e4B2gXJyBYw"
  );
  toggleVideo(
    document.getElementById("animalessadas"),
    document.getElementById("animalessadas_video"),
    "https://www.youtube.com/embed/P_aXN9mrEh0"
  );
  toggleVideo(
    document.getElementById("Genetdsijfsd"),
    document.getElementById("Genetdsijfsd_video"),
    "https://player.vimeo.com/video/26834303?h=f5311a88c6"
  );
  toggleVideo(
    document.getElementById("Genéticaklsjfdajs"),
    document.getElementById("Genéticaklsjfdajs_video"),
    "https://www.youtube.com/embed/-lbRziH6pBw"
  );
  toggleVideo(
    document.getElementById("Biologíadgknsdfjk"),
    document.getElementById("Biologíadgknsdfjk_video"),
    "https://www.youtube.com/embed/nMZFP5fxfZw"
  );




  toggleVideo(
    document.getElementById("célulaajfsdklñkdlsf"),
    document.getElementById("célulaajfsdklñkdlsf_video"),
    "https://www.youtube.com/embed/ctqXVrB7LJM"
  );

  toggleVideo(
    document.getElementById("celularjkpsdajksdf"),
    document.getElementById("celularjkpsdajksdf_video"),
    "https://www.youtube.com/embed/5-UuQLVhvSI"
  );

  toggleVideo(
    document.getElementById("sda_adsasdf_Adsfads"),
    document.getElementById("sda_adsasdf_Adsfads_video"),
    "https://player.vimeo.com/video/26545923?h=d8f0e75948"
  );





  toggleVideo(
    document.getElementById("adjklfasd_adsfasdfa"),
    document.getElementById("adjklfasd_adsfasdfa_video"),
    "https://www.youtube.com/embed/gX24MTkYYdA"
  );
  toggleVideo(
    document.getElementById("Resnmm_nmjd"),
    document.getElementById("Resnmm_nmjd_video"),
    "https://www.youtube.com/embed/A_qOMp65bMo"
  );
  toggleVideo(
    document.getElementById("RepaIIIsdf_bio"),
    document.getElementById("RepaIIIsdf_bio_video"),
    "https://www.youtube.com/embed/h8jYanldlqo"
  );
  toggleVideo(
    document.getElementById("RepasoIII_biols"),
    document.getElementById("RepasoIII_biols_video"),
    "https://www.youtube.com/embed/lHUTbuivtjk"
  );
  toggleVideo(
    document.getElementById("probl_biolo_ii"),
    document.getElementById("probl_biolo_ii_video"),
    "https://www.youtube.com/embed/6pAnQxEmJF0"
  );
  toggleVideo(
    document.getElementById("mas_prombls_biol"),
    document.getElementById("mas_prombls_biol_video"),
    "https://www.youtube.com/embed/EjyCPJ67zew"
  );
  toggleVideo(
    document.getElementById("Mas_prbls_bio"),
    document.getElementById("Mas_prbls_bio_video"),
    "https://www.youtube.com/embed/4Tk1Xb_1dmM"
  );
  



  toggleVideo(
    document.getElementById("MOVIMIENTOslhguirUNIFORME"),
    document.getElementById("MOVIMIENTOslhguirUNIFORME_video"),
    "https://www.youtube.com/embed/i1qwPE_iBqw"
  );
  toggleVideo(
    document.getElementById("MovimientoectilíneformemementeceleradoRUA"),
    document.getElementById("MovimientoectilíneformemementeceleradoRUA_video"),
    "https://www.youtube.com/embed/v4VZES06nd8"
  );
  toggleVideo(
    document.getElementById("klfsdjklñsdfjgksfdjgl"),
    document.getElementById("klfsdjklñsdfjgksfdjgl_video"),
    "https://www.youtube.com/embed/V5jdq9Foj6k"
  );
  toggleVideo(
    document.getElementById("Cidalibreklnasd"),
    document.getElementById("Cidalibreklnasd_video"),
    "https://www.youtube.com/embed/IsQoXpPWZ70"
  );
  toggleVideo(
    document.getElementById("MovimientojdsknfParabólico"),
    document.getElementById("MovimientojdsknfParabólico_video"),
    "https://www.youtube.com/embed/U78kZ19K3O0"
  );
  toggleVideo(
    document.getElementById("Movimientoklsdemiparábolico"),
    document.getElementById("Movimientoklsdemiparábolico_video"),
    "https://www.youtube.com/embed/09hNPMxPiAo"
  );
  toggleVideo(
    document.getElementById("Cinemáticaaaaaaaaaaaa"),
    document.getElementById("Cinemáticaaaaaaaaaaaa_video"),
    "https://www.youtube.com/embed/Lt4pz2dmxP8"
  );
  toggleVideo(
    document.getElementById("Física_sdjfkinámica"),
    document.getElementById("Física_sdjfkinámica_video"),
    "https://www.youtube.com/embed/GgaqBfTUy5M"
  );
  toggleVideo(
    document.getElementById("Física_sdlfkpartículas"),
    document.getElementById("Física_sdlfkpartículas_video"),
    "https://www.youtube.com/embed/yjyVfWUdgw4"
  );
  toggleVideo(
    document.getElementById("Física_sdfmuidos"),
    document.getElementById("Física_sdfmuidos_video"),
    "https://www.youtube.com/embed/EAD0LxIwMM8"
  );
  toggleVideo(
    document.getElementById("Flotacionkk_bdos"),
    document.getElementById("Flotacionkk_bdos_video"),
    "https://www.youtube.com/embed/kXoAfk6Y_I8"
  );
  toggleVideo(
    document.getElementById("Física_SDF__Mecánica"),
    document.getElementById("Física_SDF__Mecánica_video"),
    "https://www.youtube.com/embed/6M-yqa8uxiA"
  );





  toggleVideo(
    document.getElementById("Primeraermodinámica"),
    document.getElementById("Primeraermodinámica_video"),
    "https://www.youtube.com/embed/z63Ost_m0iI"
  );
  toggleVideo(
    document.getElementById("Termodinámica____I"),
    document.getElementById("Termodinámica____I_video"),
    "https://www.youtube.com/embed/10TYd-zRzbs"
  );
  toggleVideo(
    document.getElementById("ermodinámicaI__I"),
    document.getElementById("ermodinámicaI__I_video"),
    "https://www.youtube.com/embed/hwvADK_WiaU"
  );
  toggleVideo(
    document.getElementById("Física_Leyes_termodinámica"),
    document.getElementById("Física_Leyes_termodinámica_video"),
    "https://www.youtube.com/embed/S5HWnJYJWDQ"
  );
  toggleVideo(
    document.getElementById("Física_dsjkftermodinámica"),
    document.getElementById("Física_dsjkftermodinámica_video"),
    "https://www.youtube.com/embed/nhS5-kFIszA"
  );
  toggleVideo(
    document.getElementById("GASES_IDEALES"),
    document.getElementById("GASES_IDEALES_video"),
    "https://www.youtube.com/embed/Ko2znYrjdXQ"
  );




  toggleVideo(
    document.getElementById("Electroestáticasdfa"),
    document.getElementById("Electroestáticasdfa_video"),
    "https://www.youtube.com/embed/ipieX-LhpHY"
  );
  toggleVideo(
    document.getElementById("Electromagnetismoodsfkj"),
    document.getElementById("Electromagnetismoodsfkj_video"),
    "https://www.youtube.com/embed/lZJ4lpzctAU"
  );
  toggleVideo(
    document.getElementById("Magnetismoalñskfñlasdf"),
    document.getElementById("Magnetismoalñskfñlasdf_video"),
    "https://www.youtube.com/embed/EnwnTcMWZBk"
  );
  toggleVideo(
    document.getElementById("MagnetismoIidosss"),
    document.getElementById("MagnetismoIidosss_video"),
    "https://www.youtube.com/embed/F_qafzGNmeA"
  );
  toggleVideo(
    document.getElementById("PreguntasdeCargasyCampoEléctrico"),
    document.getElementById("PreguntasdeCargasyCampoEléctrico_video"),
    "https://www.youtube.com/embed/yTmCPW8DQvY"
  );
  toggleVideo(
    document.getElementById("Circuitosadjlfks"),
    document.getElementById("Circuitosadjlfks_video"),
    "https://www.youtube.com/embed/UVfux2vDcPY"  
    );






    toggleVideo(
      document.getElementById("MovimientoArmónicoPendulosyResortes"),
      document.getElementById("MovimientoArmónicoPendulosyResortes_video"),
      "https://www.youtube.com/embed/mB1fhJjYhCU"
    );
    toggleVideo(
      document.getElementById("ndlfsdPROPIEDADESDELSONIDO"),
      document.getElementById("ndlfsdPROPIEDADESDELSONIDO_video"),
      "https://www.youtube.com/embed/7rUTXkXvZDY"
    );
    toggleVideo(
      document.getElementById("Somisdfjlk"),
      document.getElementById("Somisdfjlk_video"),
      "https://www.youtube.com/embed/tRUiWcU4emc"
    );
    toggleVideo(
      document.getElementById("Tubos___dskflcuerdas"),
      document.getElementById("Tubos___dskflcuerdas_video"),
      "https://www.youtube.com/embed/m7qlU-Nwqe0"
    );
    toggleVideo(
      document.getElementById("Onfaskjfsdhf"),
      document.getElementById("Onfaskjfsdhf_video"),
      "https://www.youtube.com/embed/4REwvVnx9LU"
    );
    toggleVideo(
      document.getElementById("Ondaskdlsafss"),
      document.getElementById("Ondaskdlsafss_video"),
      "https://www.youtube.com/embed/aoGOy0DdJJw"
    );
    toggleVideo(
      document.getElementById("LenteskladsfEspejos"),
      document.getElementById("LenteskladsfEspejos_video"),
      "https://www.youtube.com/embed/AoQPTvF-owY"
    );
    toggleVideo(
      document.getElementById("luzandooticccc"),
      document.getElementById("luzandooticccc_video"),
      "https://www.youtube.com/embed/1aqx4oHTPh8"
    );    



    toggleVideo(
      document.getElementById("EjemplosdePreguntasTransformacióndelaEnergía"),
      document.getElementById("EjemplosdePreguntasTransformacióndelaEnergía_video"),
      "https://www.youtube.com/embed/4loL3NzRCUM"
    );
    toggleVideo(
      document.getElementById("Mecánicproblems"),
      document.getElementById("Mecánicproblems_video"),
      "https://www.youtube.com/embed/fCq1z-SK7dQ"
    );
    toggleVideo(
      document.getElementById("Repasoejemplssfísica"),
      document.getElementById("Repasoejemplssfísica_video"),
      "https://www.youtube.com/embed/hKMkESVNVy0"
    );
    toggleVideo(
      document.getElementById("RepasosdfIIfísica"),
      document.getElementById("RepasosdfIIfísica_video"),
      "https://www.youtube.com/embed/1op0EmieEFI"
    );
    toggleVideo(
      document.getElementById("PreguntasdeFISICAJJKAFJJK"),
      document.getElementById("PreguntasdeFISICAJJKAFJJK_video"),
      "https://www.youtube.com/embed/MJ23zF_fYIY"
    );











    toggleVideo(
      document.getElementById("AspectosAnalíticosdeMezc"),
      document.getElementById("AspectosAnalíticosdeMezc_video"),
      "https://player.vimeo.com/video/28407006?h=5bf3c22bea"
    );
    toggleVideo(
      document.getElementById("Separacióndemezclas"),
      document.getElementById("Separacióndemezclas_video"),
      "https://www.youtube.com/embed/X3zMYdsfiPw"
    );
    toggleVideo(
      document.getElementById("Solucionesdeesodejaskd"),
      document.getElementById("Solucionesdeesodejaskd_video"),
      "https://www.youtube.com/embed/WBlKqUvACFg"
    );
    toggleVideo(
      document.getElementById("Solucionesquimicaaados"),
      document.getElementById("Solucionesquimicaaados_video"),
      "https://www.youtube.com/embed/p7ndjkPcfFk"
    );
    toggleVideo(
      document.getElementById("aspectos_sustancias_quimica"),
      document.getElementById("aspectos_sustancias_quimica_video"),
      "https://player.vimeo.com/video/27071578?h=f4618e9adf"
    );
    
    toggleVideo(
      document.getElementById("Propiedadesquidelamateria"),
      document.getElementById("Propiedadesquidelamateria_video"),
      "https://www.youtube.com/embed/jtffeYEsSnk"
    );
    toggleVideo(
      document.getElementById("atmomo"),
      document.getElementById("atmomo_video"),
      "https://www.youtube.com/embed/24oVu8ey0sk"
    );
    toggleVideo(
      document.getElementById("formquisadjn"),
      document.getElementById("formquisadjna"),
      "https://www.youtube.com/embed/YfVXR-wP3Uk"
    );
    toggleVideo(
      document.getElementById("teoatom"),
      document.getElementById("teoatoma"),
      "https://www.youtube.com/embed/36L3ThprC8c"
    );
    toggleVideo(
      document.getElementById("teopeio"),
      document.getElementById("teopeioa"),
      "https://www.youtube.com/embed/4_ru_YHffp8"
    );
    toggleVideo(
      document.getElementById("cofelec"),
      document.getElementById("cofeleca"),
      "https://www.youtube.com/embed/P22tlPIVuJ0"
    );
    toggleVideo(
      document.getElementById("quiorg"),
      document.getElementById("quiorga"),
      "https://www.youtube.com/embed/OFKjqj-lr-0"
    );
    toggleVideo(
      document.getElementById("kquiorgg"),
      document.getElementById("kquiorgga"),
      "https://www.youtube.com/embed/fSUfKWSAtK0"
    );
    toggleVideo(
      document.getElementById("squiorggg"),
      document.getElementById("squiorggga"),
      "https://www.youtube.com/embed/BJI6sGJEFqY"
    );












    toggleVideo(
      document.getElementById("AspectosAnalífrdiMezc"),
      document.getElementById("AspectosAnalífrdiMezca"),
      "https://player.vimeo.com/video/27316050?h=c414b3ec2a"
    );
    toggleVideo(
      document.getElementById("enlaaa"),
      document.getElementById("enlaaaa"),
      "https://www.youtube.com/embed/ub2cY926VBk"
    );
    toggleVideo(
      document.getElementById("Arquitecturaasfdmolecular"),
      document.getElementById("Arquitecturaasfdmoleculara"),
      "https://www.youtube.com/embed/4vWerOWMvoo"
    );
    toggleVideo(
      document.getElementById("Nomenclaturaaainorgánica"),
      document.getElementById("Nomenclaturaaainorgánicaa"),
      "https://www.youtube.com/embed/Wa178N0yPh8"
    );
    toggleVideo(
      document.getElementById("Reaccionessdfquímicas"),
      document.getElementById("Reaccionessdfquímicasa"),
      "https://www.youtube.com/embed/nVEmnx3Ites"
    );
    toggleVideo(
      document.getElementById("Reaccionesadsredox"),
      document.getElementById("Reaccionesadsredoxa"),
      "https://www.youtube.com/embed/-_ftgYNZ0hc"
    );
    toggleVideo(
      document.getElementById("EstequiometriafffI"),
      document.getElementById("EstequiometriafffI_video"),
      "https://www.youtube.com/embed/14HIH4XVtZI"
    );
    toggleVideo(
      document.getElementById("EstequiometriasadfII"),
      document.getElementById("EstequiometriasadfIIa"),
      "https://www.youtube.com/embed/EtGlHOf2hSY"
    );
    toggleVideo(
      document.getElementById("Estequiometría_III"),
      document.getElementById("Estequiometría_IIIa"),
      "https://www.youtube.com/embed/txRPBY_f89I"
    );
    toggleVideo(
      document.getElementById("Análisisegráficas"),
      document.getElementById("Análisisegráficasa"),
      "https://www.youtube.com/embed/KLiC87kkIxw"
    );
    toggleVideo(
      document.getElementById("Gasesaaaaaaaa"),
      document.getElementById("Gasesaaaaaaaa_video"),
      "https://www.youtube.com/embed/Tr7Gk8hz9lI"
    );
    toggleVideo(
      document.getElementById("Equilibriofsaquímico"),
      document.getElementById("Equilibriofsaquímicoa"),
      "https://www.youtube.com/embed/6hqlbKU-X1w"
    );
    toggleVideo(
      document.getElementById("Ácido_base_PH"),
      document.getElementById("Ácido_base_PHa"),
      "https://www.youtube.com/embed/DUFHqQzwU_M"
    );
    toggleVideo(
      document.getElementById("Cinéticasdfquímica"),
      document.getElementById("Cinéticasdfquímica_video"),
      "https://www.youtube.com/embed/aqP2keddjok"
    );

    toggleVideo(
      document.getElementById("Repasodafquímica"),
      document.getElementById("Repasodafquímicaa"),
      "https://www.youtube.com/embed/NEycaBVdlAU"
    );
    toggleVideo(
      document.getElementById("resadj"),
      document.getElementById("resadja"),
      "https://www.youtube.com/embed/vqWGVUYKonck"
    );





    toggleVideo(
      document.getElementById("Cienciatécnologíaysociedad"),
      document.getElementById("Cienciatécnologíaysociedadaa"),
      "https://www.youtube.com/embed/ZVnjZTwlvRA"
    );
    toggleVideo(
      document.getElementById("CienciatecnologíaysociedadII"),
      document.getElementById("CienciatecnologíaysociedadIIa"),
      "https://www.youtube.com/embed/EUgRJE21Les"
    );
    toggleVideo(
      document.getElementById("CienciatecnologíaysociedadIII"),
      document.getElementById("CienciatecnologíaysociedadIIIa"),
      "https://www.youtube.com/embed/eI7BeR8w7kc"
    );
    toggleVideo(
      document.getElementById("CienciatecnologíaysociedadIV"),
      document.getElementById("CienciatecnologíaysociedadIVa"),
      "https://www.youtube.com/embed/2DAOSczZn2k"
    );
    toggleVideo(
      document.getElementById("CienciatecnologíaysociedadV"),
      document.getElementById("CienciatecnologíaysociedadVa"),
      "https://www.youtube.com/embed/brKAFoFppXE"
    );
    toggleVideo(
      document.getElementById("CienciatecnologíaysociedadVI"),
      document.getElementById("CienciatecnologíaysociedadVIa"),
      "https://www.youtube.com/embed/56MuD9VObM0"
    );
    toggleVideo(
      document.getElementById("CienciatecnologíaysociedadVII"),
      document.getElementById("CienciatecnologíaysociedadVIIa"),
      "https://www.youtube.com/embed/K_KP2_nVZ8A"
    );
    toggleVideo(
      document.getElementById("CienciatecnologíaysociedadVIII"),
      document.getElementById("CienciatecnologíaysociedadVIIIa"),
      "https://www.youtube.com/embed/lEYBqBYgQ7c"
    );


















    toggleVideo(
      document.getElementById("Literaturadelaedadmedia"),
      document.getElementById("Literaturadelaedadmediaa"),
      "https://www.youtube.com/embed/P4UYFkrHzfA"
    );
    toggleVideo(
      document.getElementById("Elasfrenacimiento"),
      document.getElementById("Elasfrenacimientoa"),
      "https://www.youtube.com/embed/qXM4IdPgTJQ"
    );
    toggleVideo(
      document.getElementById("Cómoseformónuestraculturaliteraria"),
      document.getElementById("Cómoseformónuestraculturaliterariaa"),
      "https://www.youtube.com/embed/cvZHf-G7g58"
    );
    toggleVideo(
      document.getElementById("Lafsailustración"),
      document.getElementById("Lafsailustracióna"),
      "https://www.youtube.com/embed/_Va5i-txPgg"
    );
    toggleVideo(
      document.getElementById("Elasdromanticismo"),
      document.getElementById("Elasdromanticismoa"),
      "https://www.youtube.com/embed/O-aH_l0FGsg"
    );
    toggleVideo(
      document.getElementById("extosliterarioslanovela"),
      document.getElementById("extosliterarioslanovelaa"),
      "https://www.youtube.com/embed/OnR0eEJN3Sw"
    );
    toggleVideo(
      document.getElementById("Textosliterarioslapoesía"),
      document.getElementById("Textosliterarioslapoesíaa"),
      "https://www.youtube.com/embed/Uj3PSmr2e2I"
    );
    toggleVideo(
      document.getElementById("Elveapscuento"),
      document.getElementById("Elveapscuentoa"),
      "https://www.youtube.com/embed/_BaRtSzs3g4"
    );
    toggleVideo(
      document.getElementById("Elasfdrealismo"),
      document.getElementById("Elasfdrealismoa"),
      "https://www.youtube.com/embed/EEKqiEuM4Vs"
    );
    toggleVideo(
      document.getElementById("extoargumentativoestructura"),
      document.getElementById("extoargumentativoestructuraa"),
      "https://www.youtube.com/embed/q5jso8iXRbQ"
    );
    toggleVideo(
      document.getElementById("Textosicónicoscomichistorietainforgrafía"),
      document.getElementById("Textosicónicoscomichistorietainforgrafíaa"),
      "https://www.youtube.com/embed/XpmSxj-8BKk"
    );
    toggleVideo(
      document.getElementById("Textosinformativosyexpositivos"),
      document.getElementById("Textosinformativosyexpositivosa"),
      "https://www.youtube.com/embed/kF3OM3l3PVQ"
    );
    toggleVideo(
      document.getElementById("Estrategiasdecomprensiónlectora"),
      document.getElementById("Estrategiasdecomprensiónlectoraa"),
      "https://www.youtube.com/embed/YIbxTuVE3xg"
    );
    toggleVideo(
      document.getElementById("ksfdgdfgdfgdfdl"),
      document.getElementById("ksfdgdfgdfgdfdla"),
      "https://www.youtube.com/embed/LxeGp6SZm1M"
    );
    toggleVideo(
      document.getElementById("Capitksldalismo"),
      document.getElementById("Capitksldalismoa"),
      "https://www.youtube.com/embed/fmq1VmBZCSM"
    );
    toggleVideo(
      document.getElementById("Estado_democracia_y_formas_de_gosdfsdbierno"),
      document.getElementById("Estado_democracia_y_formas_de_gosdfsdbiernoa"),
      "https://www.youtube.com/embed/HZRJ3hJJwUA"
    );
    toggleVideo(
      document.getElementById("Organización_del_estadsfsafasfo_Colombiano"),
      document.getElementById("Organización_del_estadsfsafasfo_Colombianoa"),
      "https://www.youtube.com/embed/ZV1RFcxXR5g"
    );
    toggleVideo(
      document.getElementById("Derecho_internacional_públsafasfasfico"),
      document.getElementById("Derecho_internacional_públsafasfasficoa"),
      "https://www.youtube.com/embed/VoWc7SpmP3k"
    );
    toggleVideo(
      document.getElementById("Derecho_internacional_hudasdasmanitario"),
      document.getElementById("Derecho_internacional_hudasdasmanitarioa"),
      "https://www.youtube.com/embed/-oMgMWcG6ZA"
    );
    toggleVideo(
      document.getElementById("Problsaduales_del_mundo"),
      document.getElementById("Problsaduales_del_mundoa"),
      "https://www.youtube.com/embed/diBNr87EB5c"
    );

    toggleVideo(
      document.getElementById("Sobre_sfadfia"),
      document.getElementById("Sobre_sfadfiaa"),
      "https://www.youtube.com/embed/dbMD0pk6v7M"
    );
    toggleVideo(
      document.getElementById("ksfdkldsf"),
      document.getElementById("ksfdkldsfa"),
      "https://www.youtube.com/embed/hzBmLL7wS-4"
    );
    toggleVideo(
      document.getElementById("dfaadfasdddsd"),
      document.getElementById("dfaadfasdddsda"),
      "https://www.youtube.com/embed/qDsEY8Ar9so"
    );
    toggleVideo(
      document.getElementById("Vanguardias"),
      document.getElementById("Vanguardiasa"),
      "https://www.youtube.com/embed/X9uAlXZsnc0"
    );



    toggleVideo(
      document.getElementById("sajfjsjsjsjsjs"),
      document.getElementById("sajfjsjsjsjsjsa"),
      "https://www.youtube.com/embed/qrbYLGfiOkE"
    );
    toggleVideo(
      document.getElementById("sgsgsgs"),
      document.getElementById("sgsgsgsa"),
      "https://www.youtube.com/embed/HjU7PyWakYQ"
    );
    toggleVideo(
      document.getElementById("kjkjkj"),
      document.getElementById("kjkjkja"),
      "https://www.youtube.com/embed/BukA-PGuC30"
    );
    toggleVideo(
      document.getElementById("nffkfkf"),
      document.getElementById("nffkfkfa"),
      "https://www.youtube.com/embed/zD8RaWDqPg4"
    );
    toggleVideo(
      document.getElementById("viddsf"),
      document.getElementById("viddsfa"),
      "https://www.youtube.com/embed/E9Uhp0LkJ3o"
    );
    toggleVideo(
      document.getElementById("fisndiid"),
      document.getElementById("fisndiida"),
      "https://www.youtube.com/embed/30FSru1OOfI"
    );
    toggleVideo(
      document.getElementById("saasfaasfasf"),
      document.getElementById("saasfaasfasfa"),
      "https://www.youtube.com/embed/E9Uhp0LkJ3o"
    );
    toggleVideo(
      document.getElementById("sfasafnfk"),
      document.getElementById("sfasafnfka"),
      "https://www.youtube.com/embed/30FSru1OOfI"
    );
    toggleVideo(
      document.getElementById("ddddd"),
      document.getElementById("ddddda"),
      "https://www.youtube.com/embed/rh0hSga2gRM"
    );
    toggleVideo(
      document.getElementById("dvsvsdv"),
      document.getElementById("dvsvsdva"),
      "https://www.youtube.com/embed/GSSkAZGo5pE"
    );
    toggleVideo(
      document.getElementById("dsajksafsd"),
      document.getElementById("dsajksafsda"),
      "https://www.youtube.com/embed/A34wJfEC7dc"
    );
    toggleVideo(
      document.getElementById("safkasf"),
      document.getElementById("safkasfa"),
      "https://www.youtube.com/embed/k6K6tIWefyE"
    );
    toggleVideo(
      document.getElementById("fdndfkdlfv"),
      document.getElementById("fdndfkdlfva"),
      "https://www.youtube.com/embed/9mL0VHo289k"
    );
    toggleVideo(
      document.getElementById("sdfasdfasa"),
      document.getElementById("sdfasdfasaa"),
      "https://www.youtube.com/embed/CV8Ia0lTS2s"
    );
    toggleVideo(
      document.getElementById("ccccccccccccc"),
      document.getElementById("ccccccccccccca"),
      "https://www.youtube.com/embed/ictDSzzi3Kw"
    );
    toggleVideo(
      document.getElementById("sddfvffffffd"),
      document.getElementById("sddfvffffffda"),
      "https://www.youtube.com/embed/4piLLWMCPog"
    );
    toggleVideo(
      document.getElementById("fdvfvfvfvvv"),
      document.getElementById("fdvfvfvfvvva"),
      "https://www.youtube.com/embed/XcCnaf0eYvU"
    );
    toggleVideo(
      document.getElementById("fvfvfvddd"),
      document.getElementById("fvfvfvddda"),
      "https://www.youtube.com/embed/T8OpwgSfEMc"
    );
    toggleVideo(
      document.getElementById("dsfadfadva"),
      document.getElementById("dsfadfadvaa"),
      "https://www.youtube.com/embed/5tmaW6U8tT4"
    );



    toggleVideo(
      document.getElementById("dfasvavaaa"),
      document.getElementById("dfasvavaaaa"),
      "https://www.youtube.com/embed/bh3YQGI1Bd4"
    );
    toggleVideo(
      document.getElementById("fdnvfdnka"),
      document.getElementById("fdnvfdnkaa"),
      "https://www.youtube.com/embed/3jna5adcFPk"
    );
    toggleVideo(
      document.getElementById("sdfsdfa"),
      document.getElementById("sdfsdfaa"),
      "https://www.youtube.com/embed/Fkk0N3JGm2Y"
    );




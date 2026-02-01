/* =========================================================
   SCRIPT GLOBAL – DAIANA SERVICES
   ESTABLE · SEGURO · MULTIIDIOMA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  let translations;
  let currentLang = "es";
  let currentAppointmentId = null;



  /* =========================================================
     1️⃣ PRELOADER – SE ELIMINA SIEMPRE
  ========================================================= */
  const preloader = document.getElementById("preloader");
  const percentEl = document.getElementById("preloader-percent");

  if (preloader && percentEl) {
    let percent = 0;

    const loader = setInterval(() => {
      percent += Math.floor(Math.random() * 8) + 5;
      if (percent >= 100) percent = 100;

      percentEl.textContent = `Loading ${percent}%`;

      if (percent === 100) {
        clearInterval(loader);
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";
        setTimeout(() => preloader.remove(), 400);
      }
    }, 60);

    setTimeout(() => {
      if (document.body.contains(preloader)) preloader.remove();
    }, 4000);
  }

  /* =========================================================
     2️⃣ FOOTER – AÑO
  ========================================================= */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================================================
     3️⃣ TRADUCCIONES ES / EN
  ========================================================= */
  translations = {

    es: {

      // ===== ABOUT SECTION =====
      about_title: "¿Por qué elegir JGo Brows?",
      about_subtitle:
        "Conoce la experiencia, formación y filosofía que hacen de JGo Brows una marca de confianza en Calgary.",

      tab_about: "Quién soy",
      tab_education: "Formación",
      tab_experience: "Experiencia",
      tab_services: "Servicios",
      tab_location: "Ubicación",
      tab_booking: "Reservas",

      about_tab1_p1:
        "En JGo Brows serás atendida por nuestra profesional Julie Gómez, artista colombiana galardonada con un Récord Guinness en micropigmentación de cejas en el año 2022.",
      about_tab1_p2:
        "Cuenta con más de 12 años de experiencia en el mundo de la belleza y se mantiene en constante actualización, utilizando productos hipoalergénicos que cuidan tu salud y realzan tu belleza.",

      about_tab2_p1:
        "Julie realizó su formación como Cosmiatra en Venezuela con la ponente María Eugenia Draganov en el Centro Médico Estético Integral L’Marie.",
      about_tab2_p2:
        "Se certificó como Master en Extensión de Pestañas, maquilladora permanente con la artista colombiana Nina Joaqui en MPR Academy (actualmente ILEV), y en la técnica de despigmentación con Julio César Giraldo.",
      about_tab2_p3:
        "Ha participado en congresos internacionales de maquillaje permanente junto a artistas de primer nivel como Rosa Lux, Paulina Osinkwaska, Ester García, Marcos Leandro, Kenya Orsini y Tamara Souza.",

      about_tab3_p1:
        "Nuestros servicios requieren habilidad, precisión y experiencia, y en JGo Brows encontrarás las tres.",
      about_tab3_p2:
        "JGo también es maestra, dicta cursos personalizados y asesorías a aprendices, transmitiendo técnicas profesionales que generan confianza y resultados seguros.",

      about_tab4_p1:
        "En JGo Brows entendemos que ser única es tu mayor fortaleza.",
      about_tab4_p2:
        "Por eso realizamos una evaluación morfológica personalizada, conocemos tus gustos y diseñamos un servicio exclusivo que te haga sentir segura, cómoda y hermosa.",

      about_tab5_p1:
        "JGo Brows ofrece servicios profesionales en la comunidad de Southland, en el suroeste de Calgary, cerca de la estación del tren.",
      about_tab5_p2:
        "Ubicado dentro de Y Nails & Spa, disfrutarás de un espacio tranquilo, privado y sin distracciones, con atención personalizada uno a uno.",

      about_tab6_p1:
        "Nuestro horario habitual es de lunes a viernes de 10:00 am a 6:00 pm.",
      about_tab6_p2:
        "También ofrecemos citas temprano o en la noche (sujetas a disponibilidad) por una pequeña tarifa adicional.",
      about_tab6_p3:
        "Reservar tu cita es muy fácil: visita www.jgobrows.ca, consulta horarios disponibles y agenda online.",
      about_tab6_p4:
        "¿Preparada para el cambio? JGo Brows es el lugar perfecto para lograr el look que mereces.",

      subtitle: "Estudio profesional de cejas y pestañas",
      hero_subtitle:
        "Mejoramos tu estilo con detalle, higiene estricta y servicio totalmente personalizado.",
      hero_btn_appointment: "Agendar cita",
      hero_btn_services: "Ver servicios",

      // ===== CATALOG – PMU (ES) =====
      catalog_title: "Catálogo de servicios",
      catalog_subtitle: "Servicios profesionales organizados por categoría",

      pmu_category_title: "Servicios de Maquillaje Permanente",
      pmu_badge: "PMU",
      pmu_card_title:
        "Maquillaje Permanente - Por favor leer antes de agendar cualquier procedimiento",
      pmu_short_desc:
        "Técnica subdérmica para embellecer y corregir rasgos faciales.",

      pmu_what_is_title: "¿Qué es?",
      pmu_what_is_text:
        "Técnica especializada que deposita pigmentos de manera subdérmica para lograr un resultado natural y armonioso.",

      pmu_duration_title: "Duración:",
      pmu_duration_text:
        "Entre 2 y 4 años. Retoques recomendados al mes, al año y luego cada 2 a 4 años.",

      pmu_why_title: "¿Por qué elegirnos?",
      pmu_why_1: "Técnica delicada y natural",
      pmu_why_2: "Pigmento implantado a 2 mm",
      pmu_why_3: "Técnicas manuales y digitales",

      pmu_pain_title: "¿Duele?",
      pmu_pain_text:
        "No, manejamos anestesia tópica. El dolor se reduce en un 70%, es un procedimiento cómodo.",

      pmu_contra_title: "Contraindicaciones:",
      pmu_contra_intro:
        "Personas con las siguientes condiciones deben consultar primero con la asesora:",

      pmu_contra_1: "Lactancia",
      pmu_contra_2: "Diabetes",
      pmu_contra_3: "Hipertensión no controlada",
      pmu_contra_4: "Acné activo",
      pmu_contra_5: "Enfermedades de la piel",

      pmu_recommendations_title: "⚠️ Recomendaciones importantes",
      pmu_rec_1: "🚫 Evita realizarte el procedimiento durante tu ciclo menstrual.",
      pmu_rec_2: "🚫 No te broncees 30 días antes ni después del tratamiento.",
      pmu_rec_3: "🚫 No consumir alcohol ni cafeína 48h antes.",
      pmu_rec_4: "🚫 No aplicar Botox o Ácido Hialurónico 4 meses antes o después.",
      pmu_rec_5: "🚫 En pieles oscuras pueden requerirse sesiones adicionales.",
      pmu_rec_6: "🚫 No tomar aspirina o anticoagulantes 1 semana antes.",
      pmu_rec_7: "🚫 No hacer ejercicio el día de la cita ni 8 días después.",
      pmu_rec_8: "🚫 En piel grasa los resultados pueden verse más suaves.",

      more: "Ver más",
      less: "Ver menos",

      // ===== MICROBLADING (ES) =====
          micro_badge: "Brows",
          micro_title: "Microblading Brows",
          micro_tag: "Pelo a pelo",
          micro_short: "Cejas naturales creadas vello a vello.",

          micro_proc_duration_title: "Duración del procedimiento:",
          micro_proc_duration_text: "2h 30min",

          micro_stay_title: "Tiempo de permanencia en la piel:",
          micro_stay_text:
            "Tiene una duración aproximada de 6 meses a dos años, lo cual dependerá de las características cutáneas de la persona, así como de su estilo de vida, pues personas que viven en zonas calurosas y realizan ejercicio tienden a retener menos tiempo el pigmento por la vasodilatación del poro. Se recomienda realizar una sesión a las 3 o 4 semanas para reforzar el color y luego una sesión anual.",

          micro_desc_title: "Descripción del servicio:",
          micro_desc_text:
            "El microblading de cejas se realiza depositando manualmente un pigmento en la dermis papilar de la piel mediante una pluma especial llamada tebori o inductor. Es la técnica más novedosa dentro de la industria del maquillaje permanente, en la creación de diseño de cejas pelo a pelo.",

          micro_result_title: "Resultado:",
          micro_result_text: "6 meses a 2 años",

          // ===== POWDER BROWS (ES) =====
          powder_badge: "Brows",
          powder_title: "Ombré / Powder Brows",
          powder_tag: "Efecto empolvado",
          powder_short: "Cejas suaves con efecto maquillaje.",

          powder_proc_duration_title: "Duración del procedimiento:",
          powder_proc_duration_text: "2h 30min",

          powder_intro_text:
            "Esta técnica es excelente para quienes ya tienen cejas pobladas, pero que requieren relleno y definición. Normalmente, lo que haríamos a diario con el maquillaje, pero, ¿por qué perder tiempo en eso cuando podemos tener las cejas siempre perfectas?",

          powder_stay_title: "Tiempo de permanencia en la piel:",
          powder_stay_text:
            "Tiene una duración aproximada de 8 meses a dos años, lo cual dependerá de las características cutáneas de la persona, así como de su estilo de vida, pues personas que viven en zonas calurosas y realizan ejercicio tienden a retener menos tiempo el pigmento por la vasodilatación del poro.",

          powder_retouch_text:
            "Se recomienda realizar una sesión a las 3 o 4 semanas para reforzar el color y luego una sesión anual.",

          powder_desc_title: "Descripcion del servicio:",
          powder_desc_text:
            "Utilizamos un dispositivo eléctrico, llamado dermógrafo, para colocar el pigmento sobre la piel con un movimiento rápido de la mano, lo que da como resultado un efecto pixelado de maquillaje en polvo. Para agregar densidad, podemos superponer los píxeles de forma repetitiva, dando un efecto sombreado. La idea es crear un degradado de color donde la parte de la cola se ve más oscura y la parte inicial más clara.",

          powder_ideal_text: "✔️Esta técnica es ideal para personas de piel normal y grasa.",
          powder_warning_text: "⚠️El Powder Brows está contraindicado en personas con diabetes no cicatrizante.",

          // ===== MIXED BROWS (ES) =====
          mixed_badge: "Brows",
          mixed_title: "Mixed Brows",
          mixed_tag: "Microblading + Powder",
          mixed_short: "Es la combinación de dos técnicas en una sola ceja (Microblading + Powder brows).",

          mixed_proc_duration_title: "Duración del procedimiento:",
          mixed_proc_duration_text: "2-3 horas",

          mixed_intro_text:
            "Esta Tecnica para quienes buscan un aspecto de cejas más pobladas y definidas, pero sin perder la apariencia natural.",

          mixed_stay_title: "Tiempo de permanencia en la piel:",
          mixed_stay_text:
            "Tiene una duración aproximada de 8 meses a dos años, lo cual dependerá de las características cutáneas de la persona, así como de su estilo de vida, pues personas que viven en zonas calurosas y realizan ejercicio tienden a retener menos tiempo el pigmento por la vasodilatación del poro. Se recomienda realizar una sesión a las 3 o 4 semanas para reforzar el color y luego una sesión anual.",

          mixed_desc_title: "Descripcion del servicio:",
          mixed_desc_text:
            "Realizamos pelitos para dar una apariencia natural pero agregamos sombra para generar un efecto de maquillaje; De esta manera logramos una ceja definida sin verse del todo maquillada. La primera parte consiste en realizar las incisiones finas y precisas del microblading, utilizando una herramienta llamada “pluma” con pequeñas cuchillas en la punta. Esto permite dibujar pelos individuales que imitan la apariencia de las cejas naturales. Posteriormente, se aplica la sombra con una máquina especializada. Se utilizan pigmentos semipermanentes que se insertan en la capa superior de la piel, rellenando los espacios entre los trazos del microblading.",

          mixed_ideal_text: "✅Esta técnica es ideal para todo tipo de piel.",

          // ===== HAIR STROKE (ES) =====
          hairstroke_badge: "Oncology",
          hairstroke_title: "Hair Stroke",
          hairstroke_tag: "Especial oncológico",
          hairstroke_short: "Reconstrucción hiperrealista de cejas.",

          hairstroke_proc_duration_title: "Duración del procedimiento:",
          hairstroke_proc_duration_text: "2h a 5h",

          hairstroke_intro_text:
            "El Hair Stroke es una técnica de maquillaje semipermanente, cuyo objetivo es corregir o reconstruir completamente una ceja carente de vello o ausente, realizando vellos de forma artística creando un efecto hiperrealista.",

          hairstroke_compare_text:
            "A diferencia del microblading, El hairstroke es una técnica avanzada de micropigmentación que recrea la apariencia de los vellos naturales de las cejas mediante el uso de una máquina y agujas ultrafinas.",

          hairstroke_stay_title: "Tiempo de permanencia en la piel:",
          hairstroke_stay_text:
            "Los resultados pueden durar entre 12 y 36 meses, dependiendo del tipo de piel, el metabolismo y los cuidados posteriores. Se recomienda realizar una sesión a las 3 o 4 semanas para reforzar el color.",

          hairstroke_desc_title: "Descripcion del servicio:",
          hairstroke_desc_text:
            "Este procedimiento consiste en depositar cuidadosamente el pigmento en la epidermis con trazos finos y estratégicamente diseñados para imitar la dirección y el crecimiento natural de los vellos. El resultado es una ceja realista, con profundidad y textura, sin el efecto difuminado.",

          // ===== NANO BROWS (ES) =====
          nano_badge: "Brows",
          nano_title: "Nano Brows",
          nano_tag: "Efecto pincelado",
          nano_short: "Técnica vanguardista ultra delicada.",

          nano_proc_duration_title: "Duración del procedimiento:",
          nano_proc_duration_text: "2h 30min",

          nano_intro_text:
            "Nano Brows es una evolución vanguardista del microblading tradicional, también conocida como cejas de acariciamiento de cabello.",

          nano_goal_text:
            "Nano Brows es una técnica de maquillaje semipermanente, cuyo objetivo es diseñar vellos de forma artística creando un efecto pincelada difuminada.",

          nano_compare_text:
            "A diferencia del microblading y El hairstroke, Nano Borws esta es una tecnica sofisticada en la que el artista desplaza las agujas como si de danzar sobre la piel se tratara.",

          nano_stay_title: "Tiempo de permanencia en la piel:",
          nano_stay_text:
            "Esta tecnica tiene una duración aproximada de 8 meses a dos años, lo cual dependerá de las características cutáneas de la persona, así como de su estilo de vida. Se recomienda realizar una sesión a las 3 o 4 semanas para reforzar el color y luego una sesión anual.",

          nano_desc_title: "Descripcion del servicio:",
          nano_desc_text:
            "Nuestro método de implantación Nano Brows utiliza un dispositivo digital de última generación, que permite precisión y complejidad en la aplicación de pigmentos, además de ser mucho más suave para la piel. Esto te asegura obtener los mejores resultados posibles de nano cejas, con cejas más llenas y definidas que tienen un aspecto natural impresionante.",

          nano_ideal_text: "✅Ideal para todo tipo de piel",

          // ===== LIPS & EYES (ES) =====
          lips_eyes_category: "Lips & Eyes",

          lip_badge: "Lips",
          lip_title: "Lip Blush",
          lip_tag: "Micropigmentación labial",
          lip_short: "Mejora el color, contorno y simetría de los labios.",

          lip_duration_title: "Duración:",
          lip_duration_text: "2 a 3 horas",

          lip_desc_title: "Descripcion del servicio:",
          lip_desc_intro:
            "Esta es una tecnica en la que introducimos pigmentos en la capa superficial de la piel mediante una herramienta con microagujas. Es ideal para:",
          lip_list_1: "Definir contornos poco marcados",
          lip_list_2: "Corregir asimetrías labiales",
          lip_list_3: "Dar color a labios pálidos o desiguales",
          lip_list_4: "Rejuvenecer el rostro sin cirugía",

          lip_desc_extra:
            "Muchas personas la confunden con el tatuaje tradicional, pero la micropigmentación labial utiliza pigmentos menos densos, más naturales y diseñados para desvanecerse gradualmente.",

          lip_result_title: "Resultado:",
          lip_result_text: "8 meses a 2 años.",
          lip_retouch_text: "Retoque entre 4 y 6 semanas y luego anual.",

          lashline_badge: "Eyes",
          lashline_title: "Entre las pestañas naturales",
          lashline_tag: "Efecto natural",
          lashline_short: "Intensifica la mirada con un sombreado sutil.",

          lashline_proc_duration_title: "Duración del procedimiento:",
          lashline_proc_duration_text: "1h 30min",

          lashline_result_title: "Resultado:",
          lashline_result_text: "8 meses a 2 años",

          lashline_intro_text:
            "Sombreado delicado en la base de las pestañas, sin efecto maquillaje marcado.",

          lashline_stay_title: "Tiempo de permanencia en la piel:",
          lashline_stay_text:
            "Los resultados pueden durar entre 8 meses y 2 años, dependiendo de varios factores: tipo de piel, cuidados posteriores, calidad de los pigmentos y técnica aplicada. Lo más habitual es que se recomiende un retoque entre las 4 y 6 semanas posteriores, y luego uno al año para mantener el color vivo.",

          lashline_desc_title: "Descripcion del servicio:",
          lashline_desc_text:
            "Se realiza un sombreado sutil en la base de las pestañas, logrando mayor densidad y definición sin que se note maquillaje. Perfecto para quienes desean realzar la mirada de forma discreta.",

          lashline_device_text:
            "Utilizamos un dispositivo eléctrico, llamado dermógrafo, para colocar el pigmento sobre la piel con un movimiento rápido de la mano, lo que da como resultado un efecto pixelado de maquillaje en polvo y realce de las pestañas naturales.",

          eyeliner_badge: "Eyes",
          eyeliner_title: "Eye Liner",
          eyeliner_tag: "Delineado permanente",
          eyeliner_short: "Delineado definido sin maquillaje diario.",

          eyeliner_duration_title: "Duración:",
          eyeliner_duration_text: "2 horas aprox.",

          eyeliner_intro_text:
            "Despídete de la molestia de aplicar delineador todos los días y abraza la belleza de unos ojos definidos permanentemente.",

          eyeliner_stay_title: "Duración:",
          eyeliner_stay_text:
            "Los resultados pueden durar entre 8 meses y 2 años, dependiendo de varios factores: tipo de piel, cuidados posteriores, calidad de los pigmentos y técnica aplicada. Lo más habitual es que se recomiende un retoque entre las 4 y 6 semanas posteriores, y luego uno al año para mantener el color vivo.",

          eyeliner_desc_title: "Descripcion del servicio:",
          eyeliner_desc_text:
            "Utilizamos un dispositivo eléctrico, llamado dermógrafo, para colocar el pigmento sobre la piel, realizamos un delineado con diseño previo aprobado por la paciente.",

        // ===== PARAMEDICAL & ONCOLOGY (ES) =====
          para_category: "Paramedical & Oncology",
          para_badge: "Medical",

          para_title: "Micropigmentación Paramédica y Oncológica",
          para_tag: "Reconstructiva",
          para_short: "Corrección estética con enfoque médico.",

          para_duration_title: "Duración:",
          para_duration_text: "3 a 5 horas apx.",

          para_desc_title: "Descripcion del servicio:",
          para_desc_text:
            "Es un proceso que permite la corrección de cicatrices, areolas, estrías, vitiligo, alopecia entre otras imperfecciones mediante la Micropigmentación en la piel. Este proceso es recomendado para personas que han pasado por procedimientos quirúrgicos o cáncer de mama.",

          para_session_price: "Cada sesión de 3 horas tiene costo de $500",

          para_onco_title: "Oncológica y reparadora:",
          para_onco_intro:
            "Dirigido a aquellas personas que van a ser o están sometidas a procesos oncológicos, y a intervenciones quirúrgicas. Realizaremos:",

          para_list_1: "Micropigmentación de cejas",
          para_list_2: "Micropigmentación de pestañas",
          para_list_3: "Micropigmentación areolar",
          para_list_4: "Micropigmentación de cicatrices",
          para_list_5: "Micropigmentación de rostros quemados",

          para_vitiligo_title: "Vitíligo:",
          para_vitiligo_text:
            "Con esta técnica de la micropigmentación se ayuda a disimular notoriamente el vitíligo. Los vitíligos se pigmentarán una vez que lleven estables al menos un mes, y no todos los vitíligos se pueden pigmentar.",

          para_capilar_title: "Capilar - Alopecia:",
          para_capilar_text:
            "Ideal para aquellas personas con alopecia que deseen proyectar un cuero cabelludo abundante, o camuflar una cicatriz en el cuero cabelludo, ya que visiblemente reduce años y da un aspecto saludable.",

          para_result_duration_title: "Duracion:",
          para_result_duration_text:
            "Los resultados pueden durar entre 8 meses y 2 años, dependiendo de varios factores: tipo de piel, cuidados posteriores, calidad de los pigmentos y técnica aplicada. Lo más habitual es que se recomiende un retoque entre las 4 y 6 semanas posteriores, y luego uno al año para mantener el color vivo. La profesional te indicara de acuerdo a tu caso particular.",

          para_item_1: "Cicatrices",
          para_item_2: "Areolas",
          para_item_3: "Vitíligo",
          para_item_4: "Alopecia",
          para_item_5: "Procesos oncológicos",

          // ===== LASH EXTENSIONS (ES) =====
            lash_category: "Lash Extensions",

            classic_badge: "Classic",
            classic_title: "Classic Full Set",
            classic_tag: "Look natural",
            classic_short: "Efecto máscara de pestañas, elegante y natural.",

            classic_desc_title: "Descripcion del procedimiento:",
            classic_desc_text:
              "Son cabellos sintéticos, de pelo y fibras naturales que vienen individuales, pelo por pelo, de diferentes texturas, formas y tamaños; Las pegamos sobre cada pelito de pestaña natural sin tocar la piel.",

            classic_benefits_title: "Ventajas del tratamiento:",
            classic_benefit_1: "Los resultados son inmediatos al finalizar el tratamiento.",
            classic_benefit_2: "No daña las pestañas naturales ya que no tiene contacto con la raíz ni la piel.",
            classic_benefit_3:
              "Son la mejor opción para tener una mirada deslumbrante, colocamos en todos y cada uno de los pelitos naturales sin saltarnos alguno, obteniendo resultados abundantes.",

            classic_time_question: "Cuanto tiempo dura el procedimiento?",
            classic_time_text:
              "El procedimiento dependerá de la escasez o abundancia de pestañas naturales que tenga la paciente y la técnica elegida.",

            classic_retention_title: "Tiempo de permenacia en las pestañas:",
            classic_retention_text:
              "Nuestras pestañas naturales tienen un ciclo de vida promedio entre 30 a 90 días, motivo por el cual se irán cayendo y se necesitara retoques o mantenimientos cada 15 o 20 días para remplazar las que se han caído al cambiar.",

            classic_fill_badge: "Fill",
            classic_fill_title: "Classic Fill",
            classic_fill_tag: "Mantenimiento",
            classic_fill_short: "Relleno para set clásico.",

            classic_fill_duration_title: "Duración del procedimiento:",
            classic_fill_duration_text: "1h 30min",

            classic_fill_desc_title: "Descripción del servicio:",
            classic_fill_guidelines_title: "Directrices para el servicio de relleno:",

            classic_fill_guideline_1:
              "Para poder optar a un surtido de 1–3 semanas, debes tener al menos el 40% de tus extensiones de pestañas restantes de la cita anterior.",

            classic_fill_guideline_2:
              "A las 3 semanas, todavía se requiere un 40% de retención para que se considere un relleno. Cualquier cosa menos puede considerarse un conjunto completo.",

            classic_fill_warning:
              "🔔 Importante: Si reservas un relleno y llegas con menos del 40% de tus pestañas restantes, pueden aplicarse cargos adicionales o el servicio puede actualizarse a un juego completo. Si agendas cita pasadas 3 semanas, se considerará como un set nuevo.",

            classic_fill_external:
              "Los rellenos extranjeros se gestionan caso por caso. Pueden requerir tiempo adicional o la eliminación de extensiones existentes antes de poder aplicar un nuevo conjunto, y pueden aplicarse cargos adicionales.",

            classic_fill_requirement: "Requiere mínimo 40% de retención.",

            // ===== HYBRID / VOLUME / YY (ES) =====
            hybrid_badge: "Hybrid",
            hybrid_title: "Hybrid Full Set",
            hybrid_tag: "Clásico + Volumen",
            hybrid_short: "Mayor densidad sin exceso.",

            hybrid_duration_title: "Duración:",
            hybrid_duration_text: "2 - 2.5 horas (varía según tu recuento natural de pestañas).",

            hybrid_desc_text:
              "Este estilo añade suavidad, textura y dimensión, convirtiéndolo en una excelente para quienes buscan un efecto naturalmente voluminoso.",

            hybrid_ideal_title: "✅Ideal para:",
            hybrid_ideal_text:
              "Clientes con pestañas escasas o quienes quieren más volumen que un juego Classic pero prefieren un aspecto más suave y natural que un volumen completo.",

            hybrid_not_ideal_title: "❌No es ideal para:",
            hybrid_not_ideal_text:
              "Clientes que buscan un aspecto de pestañas muy dramático o denso, ya que proporciona un volumen más sutil en comparación con los sets Volume o Mega Volume.",

            hybrid_fill_badge: "Fill",
            hybrid_fill_title: "Hybrid Fill",
            hybrid_fill_tag: "Mantenimiento",
            hybrid_fill_short: "Pestañas más abundantes y de aspecto natural con nuestro Hybrid Fill",

            hybrid_fill_duration_title: "Duración:",
            hybrid_fill_duration_text: "1.5 – 2 horas",

            hybrid_fill_guidelines_title: "Directrices para el servicio de relleno:",
            hybrid_fill_rule_1:
              "Para poder optar a un surtido de 1-3 semanas, debes tener al menos el 40% de tus extensiones de pestañas restantes de la cita anterior.",
            hybrid_fill_rule_2:
              "A las 3 semanas, todavía se requiere un 40% de retención para que se considere un relleno. Cualquier cosa menos puede considerarse un conjunto completo.",

            hybrid_fill_warning:
              "🔔 Importante: Si reservas un relleno y llegas con menos del 40% de tus pestañas restantes, pueden aplicarse cargos adicionales o el servicio puede actualizarse a un juego completo.",

            hybrid_fill_after_text:
              "Si agendas cita pasadas 3 semanas, se considerará como un set nuevo.",

            hybrid_fill_external:
              "Los rellenos extranjeros se gestionan caso por caso. Pueden requerir tiempo adicional o la eliminación de extensiones existentes antes de poder aplicar un nuevo conjunto, y pueden aplicarse cargos adicionales.",

            volume_badge: "Volume",
            volume_title: "Volume Full Set",
            volume_tag: "Mirada intensa",
            volume_short: "Volumen dramático y definido.",

            volume_duration_title: "Duración:",
            volume_duration_text: "2.5 – 2.75 horas",

            volume_desc_title: "Descripción del servicio",
            volume_desc_text_1:
              "El Volume Full Set crea un aspecto denso, esponjoso y ultra voluminoso aplicando varias extensiones ligeras por pestaña natural (2d,3d,4d).",
            volume_desc_text_2:
              "Esta técnica da como resultado un aspecto de pestañas llamativo, perfecto para quienes aman pestañas plenas, dramáticas y llamativas.",

            volume_ideal_title: "✅ Mejor para:",
            volume_ideal_text:
              "Clientes que desean un estilo de pestañas dramático y de alto impacto con cobertura total.",

            volume_not_ideal_title: "❌ No es ideal para:",
            volume_not_ideal_text:
              "Clientes que buscan un toque sutil y natural: los set Clásico, Híbrido pueden ser más adecuados.",

            yy_badge: "YY",
            yy_title: "YY Full Set",
            yy_tag: "Volumen ligero",
            yy_short:
              "Perfecto para un look con volumen suave, sutil y con un aire ligero.",

            yy_duration_title: "Duración:",
            yy_duration_text: "2 – 2.5 horas",

            yy_desc_title: "Descripción del servicio",
            yy_desc_text:
              "Ofrece un volumen suave y son perfectos para clientes que buscan algo más abundante que las Classic, pero más ligeros que los sets Volume completo. Las pestañas YY son un gran paso adelante respecto a las clásicas, ofreciendo un aspecto suave y más abundante sin añadir peso. El diseño en forma de Y proporciona un efecto de volumen ligero que aumenta el volumen, manteniéndose natural y cómodo — ideal para pestañas finas o clientes con problemas de retención.",

            yy_ideal_title: "✅ Mejor para:",
            yy_ideal_text: "Un aspecto más lleno que el Classic con una sensación ligera.",

            yy_not_ideal_title: "❌ No es ideal para:",
            yy_not_ideal_text: "Quienes buscan un volumen dramático o denso.",

            // ===== BROWS & OTHERS (ES) =====
            brows_others_title: "Cejas & Otros",

            others_design_title: "Diseño de Cejas",
            others_design_desc: "Diseño personalizado según tu rostro.",

            others_threading_title: "Depilación con Hilo",
            others_threading_desc: "Depilación con hilo precisa y natural.",

            others_waxing_title: "Depilación con Cera",
            others_waxing_desc: "Depilación con cera rápida y efectiva.",

            others_face_title: "Labios · Mentón · Patillas",
            others_face_desc: "Depilación facial precisa.",

            others_tint_title: "Tinte de Cejas",
            others_tint_desc: "Coloración para definir y dar volumen.",

            others_lamination_title: "Laminado de Cejas",
            others_lamination_desc: "Cejas alineadas y estilizadas.",

            others_lashlift_title: "Lifting de Pestañas",
            others_lashlift_desc: "Elevación natural de pestañas.",

            others_henna_title: "Henna Brow",
            others_henna_desc: "Pigmentación temporal con efecto relleno.",

            others_bath_title: "Lash Bath",
            others_bath_desc: "Limpieza profunda de pestañas.",

            others_underarm_title: "Depilación de Axilas",
            others_underarm_desc: "Depilación de axilas.",

            // Optgroups
            optgroup_pmu_brows: "Permanent Make Up - Cejas",
            optgroup_lips_eyes: "Labios y Ojos",
            optgroup_paramedica: "Paramédica y Oncológica",
            optgroup_lashes: "Extensiones de Pestañas",
            optgroup_others: "Cejas & Otros Servicios",

        // ===== FORMULARIO (ES) =====
form_title: "Agendar una cita",

form_name: "Nombre completo",
form_name_placeholder: "Tu nombre completo",

form_phone: "Celular / WhatsApp",
form_phone_placeholder: "Ej: 3001234567",

form_email: "Correo electrónico",
form_email_placeholder: "ejemplo@correo.com",

form_service: "Servicio",
form_service_placeholder: "Selecciona un servicio",

form_date: "Fecha de cita",
form_time: "Hora de cita",

form_notes: "Observaciones",
form_notes_placeholder: "Detalles adicionales",

form_terms: "Acepto términos y condiciones",
form_promotions: "Deseo recibir promociones y novedades",

form_submit: "Enviar solicitud de cita",

pay_button: "Pagar reserva ($20 CAD)",

// ===== FORM SERVICES (ES) =====
service_microblading: "Microblading de Cejas",
service_powder: "Cejas Ombré / Powder",
service_mixed: "Cejas Mixtas",
service_nano: "Nano Brows",

service_lip: "Lip Blush",
service_eyes_in: "Entre Pestañas Naturales",
service_eyeliner: "Eye Liner",

service_paramedica: "Micropigmentación Paramédica y Oncológica",

service_classic: "Set Clásico Completo",
service_classic_fill: "Relleno Clásico",
service_hybrid: "Set Híbrido Completo",
service_hybrid_fill: "Relleno Híbrido",
service_volume: "Set de Volumen",
service_yy: "Set YY",

service_brow_design: "Diseño de Cejas",
service_brow_lami: "Laminado de Cejas",
service_brow_tint: "Tinte de Cejas",
service_lash_lift: "Lifting de Pestañas",


  social_title: "Redes sociales",
  social_subtitle: "Síguenos y contáctanos directamente",

  social_facebook: "Facebook",
  social_instagram: "Instagram",

  social_whatsapp_cta: "Escríbenos por WhatsApp",

    },

    en: {
      subtitle: "Professional brow and lash studio",
      hero_subtitle:
        "We enhance your style with meticulous detail, strict hygiene, and fully personalized service.",
      hero_btn_appointment: "Book appointment",
      hero_btn_services: "View services",

                    // ===== ABOUT SECTION =====
        about_title: "Why choose JGo Brows?",
        about_subtitle:
          "Discover the experience, education, and philosophy that make JGo Brows a trusted brand in Calgary.",

        // Tabs
        tab_about: "About me",
        tab_education: "Education",
        tab_experience: "Experience",
        tab_services: "Services",
        tab_location: "Location",
        tab_booking: "Booking",

        // Tab 1 – About me
        about_tab1_p1:
          "At JGo Brows, you will be cared for by our professional Julie Gómez, a Colombian artist awarded a Guinness World Record in eyebrow micropigmentation in 2022.",
        about_tab1_p2:
          "She has over 12 years of experience in the beauty industry and remains constantly updated, using hypoallergenic products that protect your health and enhance your natural beauty.",

        // Tab 2 – Education
        about_tab2_p1:
          "Julie completed her training as a Cosmetologist in Venezuela under lecturer María Eugenia Draganov at the L’Marie Comprehensive Aesthetic Medical Center.",
        about_tab2_p2:
          "She is certified as a Master Lash Extension Artist and Permanent Makeup Artist with Colombian artist Nina Joaqui at MPR Academy (now ILEV), as well as in depigmentation techniques with Julio César Giraldo.",
        about_tab2_p3:
          "She has participated in international permanent makeup congresses alongside top-level artists such as Rosa Lux, Paulina Osinkwaska, Ester García, Marcos Leandro, Kenya Orsini, and Tamara Souza.",

        // Tab 3 – Experience
        about_tab3_p1:
          "Our services require skill, precision, and experience—and at JGo Brows, you will find all three.",
        about_tab3_p2:
          "JGo is also an educator, offering personalized courses and professional mentoring, sharing techniques that build confidence and deliver safe, high-quality results.",

        // Tab 4 – Services
        about_tab4_p1:
          "At JGo Brows, we believe that being unique is your greatest strength.",
        about_tab4_p2:
          "That’s why we perform a personalized facial analysis, understand your preferences, and design an exclusive service that makes you feel confident, comfortable, and beautiful.",

        // Tab 5 – Location
        about_tab5_p1:
          "JGo Brows offers professional services in the Southland community, located in southwest Calgary, near the train station.",
        about_tab5_p2:
          "Located inside Y Nails & Spa, you will enjoy a calm, private space with personalized one-on-one attention.",

        // Tab 6 – Booking
        about_tab6_p1:
          "Our regular business hours are Monday to Friday from 10:00 am to 6:00 pm.",
        about_tab6_p2:
          "Early morning or evening appointments are also available (subject to availability) for a small additional fee.",
        about_tab6_p3:
          "Booking your appointment is easy: visit www.jgobrows.ca, check available times, and book online.",
        about_tab6_p4:
          "Ready for a change? JGo Brows is the perfect place to achieve the look you deserve.",

  // ===== SERVICE CATALOG =====

      catalog_title: "Service Catalog",
      catalog_subtitle: "Professional services organized by category",

      pmu_category_title: "Permanent Make Up Services",
      pmu_badge: "PMU",
      pmu_card_title:
        "Permanent Make Up – Please read before booking any procedure",
      pmu_short_desc:
        "Subdermal technique designed to enhance and correct facial features.",

      pmu_what_is_title: "What is it?",
      pmu_what_is_text:
        "A specialized technique that deposits pigment subdermally to achieve a natural and harmonious result.",

      pmu_duration_title: "Duration:",
      pmu_duration_text:
        "Lasts between 2 and 4 years. Touch-ups are recommended after one month, one year, and then every 2 to 4 years.",

      pmu_why_title: "Why choose us?",
      pmu_why_1: "Delicate and natural technique",
      pmu_why_2: "Pigment implanted at 2 mm depth",
      pmu_why_3: "Manual and digital techniques",

      pmu_pain_title: "Does it hurt?",
      pmu_pain_text:
        "No. We use topical anesthesia, reducing discomfort by up to 70%. The procedure is comfortable.",

      pmu_contra_title: "Contraindications:",
      pmu_contra_intro:
        "People with the following conditions should consult the advisor first:",

      pmu_contra_1: "Breastfeeding",
      pmu_contra_2: "Diabetes",
      pmu_contra_3: "Uncontrolled hypertension",
      pmu_contra_4: "Active acne",
      pmu_contra_5: "Skin conditions",

      pmu_recommendations_title: "⚠️ Important recommendations",
      pmu_rec_1: "🚫 Avoid the procedure during your menstrual cycle.",
      pmu_rec_2: "🚫 Do not tan 30 days before or after the treatment.",
      pmu_rec_3: "🚫 Avoid alcohol and caffeine 48 hours before.",
      pmu_rec_4: "🚫 Do not apply Botox or Hyaluronic Acid 4 months before or after.",
      pmu_rec_5: "🚫 Darker skin tones may require additional sessions.",
      pmu_rec_6: "🚫 Do not take aspirin or blood thinners one week before.",
      pmu_rec_7: "🚫 Do not exercise on the appointment day or for 8 days after.",
      pmu_rec_8: "🚫 On oily skin, results may appear softer.",

      more: "View more",
      less: "View less",

      // ===== MICROBLADING (EN) =====
      
      micro_badge: "Brows",
        micro_title: "Microblading Brows",
        micro_tag: "Hair strokes",
        micro_short: "Natural brows created hair by hair.",

        micro_proc_duration_title: "Procedure duration:",
        micro_proc_duration_text: "2h 30min",

        micro_stay_title: "Skin retention time:",
        micro_stay_text:
          "It lasts approximately from 6 months to two years, depending on the individual’s skin characteristics and lifestyle. People who live in warm climates and exercise frequently tend to retain pigment for a shorter period due to pore vasodilation. A touch-up session is recommended after 3 to 4 weeks, followed by an annual session.",

        micro_desc_title: "Service description:",
        micro_desc_text:
          "Eyebrow microblading is performed by manually depositing pigment into the papillary dermis using a special pen called a tebori or inducer. It is the most innovative technique in the permanent makeup industry for creating hair-stroke eyebrow designs.",

        micro_result_title: "Result:",
        micro_result_text: "6 months to 2 years",

        // ===== POWDER BROWS (EN) =====
        powder_badge: "Brows",
        powder_title: "Ombré / Powder Brows",
        powder_tag: "Powder effect",
        powder_short: "Soft brows with a makeup effect.",

        powder_proc_duration_title: "Procedure duration:",
        powder_proc_duration_text: "2h 30min",

        powder_intro_text:
          "This technique is excellent for clients who already have full brows but need filling and definition. It replaces daily makeup, keeping your brows perfect at all times.",

        powder_stay_title: "Skin retention time:",
        powder_stay_text:
          "It lasts approximately from 8 months to two years, depending on skin type and lifestyle. Clients who live in warm climates and exercise frequently tend to retain pigment for a shorter time due to pore vasodilation.",

        powder_retouch_text:
          "A touch-up session is recommended after 3 to 4 weeks, followed by an annual session.",

        powder_desc_title: "Service description:",
        powder_desc_text:
          "We use an electric device called a dermograph to implant pigment into the skin with fast hand movements, creating a pixelated powder makeup effect. Density is built by layering pixels, producing a shaded gradient where the tail is darker and the front is softer.",

        powder_ideal_text: "✔️This technique is ideal for normal and oily skin types.",
        powder_warning_text:
          "⚠️Powder Brows is contraindicated for people with non-healing diabetes.",

          // ===== MIXED BROWS (EN) =====
        mixed_badge: "Brows",
        mixed_title: "Mixed Brows",
        mixed_tag: "Microblading + Powder",
        mixed_short: "Combination of two techniques in a single brow (Microblading + Powder Brows).",

        mixed_proc_duration_title: "Procedure duration:",
        mixed_proc_duration_text: "2–3 hours",

        mixed_intro_text:
          "This technique is designed for clients seeking fuller, more defined brows without losing a natural appearance.",

        mixed_stay_title: "Skin retention time:",
        mixed_stay_text:
          "It lasts approximately from 8 months to two years, depending on skin characteristics and lifestyle. Clients living in warm climates or exercising frequently may retain pigment for a shorter period due to pore vasodilation. A touch-up session is recommended after 3 to 4 weeks, followed by an annual session.",

        mixed_desc_title: "Service description:",
        mixed_desc_text:
          "We create hair strokes to achieve a natural appearance and add soft shading for a makeup effect. This results in defined brows without looking overly made up. The process begins with precise microblading incisions using a pen tool with fine blades to draw individual hairs that mimic natural brows. Then, shading is applied with a specialized machine, using semi-permanent pigments implanted into the upper skin layer to fill spaces between the microblading strokes.",

        mixed_ideal_text: "✅This technique is ideal for all skin types.",

        // ===== HAIR STROKE (EN) =====
        hairstroke_badge: "Oncology",
        hairstroke_title: "Hair Stroke",
        hairstroke_tag: "Oncology specialty",
        hairstroke_short: "Hyper-realistic eyebrow reconstruction.",

        hairstroke_proc_duration_title: "Procedure duration:",
        hairstroke_proc_duration_text: "2 to 5 hours",

        hairstroke_intro_text:
          "Hair Stroke is a semi-permanent makeup technique aimed at correcting or fully reconstructing brows with little or no hair by artistically creating individual hair strokes for a hyper-realistic effect.",

        hairstroke_compare_text:
          "Unlike microblading, Hair Stroke is an advanced micropigmentation technique that recreates natural eyebrow hairs using a machine and ultra-fine needles.",

        hairstroke_stay_title: "Skin retention time:",
        hairstroke_stay_text:
          "Results may last between 12 and 36 months, depending on skin type, metabolism, and aftercare. A touch-up session is recommended after 3 to 4 weeks.",

        hairstroke_desc_title: "Service description:",
        hairstroke_desc_text:
          "This procedure involves carefully depositing pigment into the epidermis with fine, strategically designed strokes that mimic the natural direction and growth of eyebrow hairs. The result is a realistic brow with depth and texture, without a blurred effect.",

        // ===== NANO BROWS (EN) =====
        nano_badge: "Brows",
        nano_title: "Nano Brows",
        nano_tag: "Brush stroke effect",
        nano_short: "Ultra-delicate, cutting-edge technique.",

        nano_proc_duration_title: "Procedure duration:",
        nano_proc_duration_text: "2h 30min",

        nano_intro_text:
          "Nano Brows is an advanced evolution of traditional microblading, also known as hair caressing brows.",

        nano_goal_text:
          "Nano Brows is a semi-permanent makeup technique designed to artistically create hair strokes with a soft, diffused brush effect.",

        nano_compare_text:
          "Unlike microblading and Hair Stroke, Nano Brows is a sophisticated technique where the artist moves the needles with fluid, dance-like motions over the skin.",

        nano_stay_title: "Skin retention time:",
        nano_stay_text:
          "This technique lasts approximately from 8 months to two years, depending on skin characteristics and lifestyle. A touch-up session is recommended after 3 to 4 weeks, followed by an annual session.",

        nano_desc_title: "Service description:",
        nano_desc_text:
          "Our Nano Brows implantation method uses a state-of-the-art digital device that allows precision and complexity in pigment application while being much gentler on the skin. This ensures fuller, more defined brows with an impressively natural appearance.",

        nano_ideal_text: "✅Ideal for all skin types",

        // ===== LIPS & EYES (EN) =====
        lips_eyes_category: "Lips & Eyes",

        lip_badge: "Lips",
        lip_title: "Lip Blush",
        lip_tag: "Lip Micropigmentation",
        lip_short: "Enhances lip color, contour, and symmetry.",

        lip_duration_title: "Duration:",
        lip_duration_text: "2 to 3 hours",

        lip_desc_title: "Service description:",
        lip_desc_intro:
          "This technique introduces pigments into the superficial layer of the skin using a micro-needle device. It is ideal for:",
        lip_list_1: "Defining poorly marked contours",
        lip_list_2: "Correcting lip asymmetries",
        lip_list_3: "Adding color to pale or uneven lips",
        lip_list_4: "Rejuvenating the face without surgery",

        lip_desc_extra:
          "Many people confuse it with traditional tattooing, but lip micropigmentation uses lighter, more natural pigments designed to fade gradually.",

        lip_result_title: "Result:",
        lip_result_text: "8 months to 2 years.",
        lip_retouch_text: "Touch-up between 4 and 6 weeks, then annually.",

        lashline_badge: "Eyes",
        lashline_title: "Natural Lash Line Enhancement",
        lashline_tag: "Natural effect",
        lashline_short: "Enhances the eyes with subtle shading.",

        lashline_proc_duration_title: "Procedure duration:",
        lashline_proc_duration_text: "1h 30min",

        lashline_result_title: "Result:",
        lashline_result_text: "8 months to 2 years",

        lashline_intro_text:
          "Delicate shading at the base of the lashes without a heavy makeup effect.",

        lashline_stay_title: "Skin retention time:",
        lashline_stay_text:
          "Results may last between 8 months and 2 years depending on skin type, aftercare, pigment quality, and applied technique. A touch-up is usually recommended after 4 to 6 weeks, followed by an annual session.",

        lashline_desc_title: "Service description:",
        lashline_desc_text:
          "A subtle shading is applied at the base of the lashes to create greater density and definition without visible makeup. Perfect for those who want a discreet enhancement.",

        lashline_device_text:
          "We use an electric device called a dermograph to implant pigment with fast hand movements, creating a soft pixelated makeup effect that enhances natural lashes.",

        eyeliner_badge: "Eyes",
        eyeliner_title: "Eye Liner",
        eyeliner_tag: "Permanent eyeliner",
        eyeliner_short: "Defined eyeliner without daily makeup.",

        eyeliner_duration_title: "Duration:",
        eyeliner_duration_text: "Approximately 2 hours",

        eyeliner_intro_text:
          "Say goodbye to daily eyeliner application and enjoy beautifully defined eyes permanently.",

        eyeliner_stay_title: "Duration:",
        eyeliner_stay_text:
          "Results can last between 8 months and 2 years depending on skin type, aftercare, pigment quality, and technique. A touch-up is usually recommended after 4 to 6 weeks, followed by yearly maintenance.",

        eyeliner_desc_title: "Service description:",
        eyeliner_desc_text:
          "We use an electric dermograph to implant pigment into the skin, creating a liner design previously approved by the client.",

          // ===== PARAMEDICAL & ONCOLOGY (EN) =====
        para_category: "Paramedical & Oncology",
        para_badge: "Medical",

        para_title: "Paramedical & Oncology Micropigmentation",
        para_tag: "Reconstructive",
        para_short: "Aesthetic correction with a medical approach.",

        para_duration_title: "Duration:",
        para_duration_text: "Approximately 3 to 5 hours.",

        para_desc_title: "Service description:",
        para_desc_text:
          "This is a process that allows the correction of scars, areolas, stretch marks, vitiligo, alopecia, and other imperfections through skin micropigmentation. This procedure is recommended for individuals who have undergone surgical procedures or breast cancer treatment.",

        para_session_price: "Each 3-hour session costs $500",

        para_onco_title: "Oncology & restorative:",
        para_onco_intro:
          "Designed for individuals who are undergoing or have undergone oncology treatments and surgical procedures. We perform:",

        para_list_1: "Eyebrow micropigmentation",
        para_list_2: "Eyelash micropigmentation",
        para_list_3: "Areola micropigmentation",
        para_list_4: "Scar micropigmentation",
        para_list_5: "Burned skin micropigmentation",

        para_vitiligo_title: "Vitiligo:",
        para_vitiligo_text:
          "This micropigmentation technique helps significantly camouflage vitiligo. Vitiligo areas must be stable for at least one month before treatment, and not all vitiligo cases are suitable for pigmentation.",

        para_capilar_title: "Scalp - Alopecia:",
        para_capilar_text:
          "Ideal for individuals with alopecia who wish to create the appearance of a fuller scalp or camouflage scalp scars, visibly reducing age and providing a healthier appearance.",

        para_result_duration_title: "Duration:",
        para_result_duration_text:
          "Results may last between 8 months and 2 years, depending on skin type, aftercare, pigment quality, and applied technique. A touch-up is typically recommended after 4 to 6 weeks, followed by annual maintenance. The professional will advise according to your specific case.",

        para_item_1: "Scars",
        para_item_2: "Areolas",
        para_item_3: "Vitiligo",
        para_item_4: "Alopecia",
        para_item_5: "Oncology processes",

        // ===== LASH EXTENSIONS (ES) =====
          lash_category: "Lash Extensions",

          classic_badge: "Classic",
          classic_title: "Classic Full Set",
          classic_tag: "Look natural",
          classic_short: "Efecto máscara de pestañas, elegante y natural.",

          classic_desc_title: "Descripcion del procedimiento:",
          classic_desc_text:
            "Son cabellos sintéticos, de pelo y fibras naturales que vienen individuales, pelo por pelo, de diferentes texturas, formas y tamaños; Las pegamos sobre cada pelito de pestaña natural sin tocar la piel.",

          classic_benefits_title: "Ventajas del tratamiento:",
          classic_benefit_1: "Los resultados son inmediatos al finalizar el tratamiento.",
          classic_benefit_2: "No daña las pestañas naturales ya que no tiene contacto con la raíz ni la piel.",
          classic_benefit_3:
            "Son la mejor opción para tener una mirada deslumbrante, colocamos en todos y cada uno de los pelitos naturales sin saltarnos alguno, obteniendo resultados abundantes.",

          classic_time_question: "Cuanto tiempo dura el procedimiento?",
          classic_time_text:
            "El procedimiento dependerá de la escasez o abundancia de pestañas naturales que tenga la paciente y la técnica elegida.",

          classic_retention_title: "Tiempo de permenacia en las pestañas:",
          classic_retention_text:
            "Nuestras pestañas naturales tienen un ciclo de vida promedio entre 30 a 90 días, motivo por el cual se irán cayendo y se necesitara retoques o mantenimientos cada 15 o 20 días para remplazar las que se han caído al cambiar.",

          classic_fill_badge: "Fill",
          classic_fill_title: "Classic Fill",
          classic_fill_tag: "Mantenimiento",
          classic_fill_short: "Relleno para set clásico.",

          classic_fill_duration_title: "Duración del procedimiento:",
          classic_fill_duration_text: "1h 30min",

          classic_fill_desc_title: "Descripción del servicio:",
          classic_fill_guidelines_title: "Directrices para el servicio de relleno:",

          classic_fill_guideline_1:
            "Para poder optar a un surtido de 1–3 semanas, debes tener al menos el 40% de tus extensiones de pestañas restantes de la cita anterior.",

          classic_fill_guideline_2:
            "A las 3 semanas, todavía se requiere un 40% de retención para que se considere un relleno. Cualquier cosa menos puede considerarse un conjunto completo.",

          classic_fill_warning:
            "🔔 Importante: Si reservas un relleno y llegas con menos del 40% de tus pestañas restantes, pueden aplicarse cargos adicionales o el servicio puede actualizarse a un juego completo. Si agendas cita pasadas 3 semanas, se considerará como un set nuevo.",

          classic_fill_external:
            "Los rellenos extranjeros se gestionan caso por caso. Pueden requerir tiempo adicional o la eliminación de extensiones existentes antes de poder aplicar un nuevo conjunto, y pueden aplicarse cargos adicionales.",

          classic_fill_requirement: "Requiere mínimo 40% de retención.",

          // ===== LASH EXTENSIONS (EN) =====
          lash_category: "Lash Extensions",

          classic_badge: "Classic",
          classic_title: "Classic Full Set",
          classic_tag: "Natural look",
          classic_short: "Mascara-like effect, elegant and natural.",

          classic_desc_title: "Procedure description:",
          classic_desc_text:
            "These are synthetic lashes made of hair and natural fibers, applied individually lash by lash in different textures, shapes, and lengths. They are attached to each natural lash without touching the skin.",

          classic_benefits_title: "Treatment benefits:",
          classic_benefit_1: "Results are immediate after the treatment is completed.",
          classic_benefit_2: "Does not damage natural lashes since there is no contact with the root or skin.",
          classic_benefit_3:
            "It is the best option for achieving a stunning look, as we apply extensions to each natural lash without skipping any, resulting in a full appearance.",

          classic_time_question: "How long does the procedure take?",
          classic_time_text:
            "The duration of the procedure depends on the amount of natural lashes the client has and the chosen technique.",

          classic_retention_title: "Lash retention time:",
          classic_retention_text:
            "Natural lashes have an average life cycle of 30 to 90 days, which is why they shed naturally. Maintenance or refill appointments are needed every 15 to 20 days to replace fallen lashes.",

          classic_fill_badge: "Fill",
          classic_fill_title: "Classic Fill",
          classic_fill_tag: "Maintenance",
          classic_fill_short: "Refill for classic set.",

          classic_fill_duration_title: "Procedure duration:",
          classic_fill_duration_text: "1h 30min",

          classic_fill_desc_title: "Service description:",
          classic_fill_guidelines_title: "Guidelines for refill service:",

          classic_fill_guideline_1:
            "To qualify for a 1–3 week refill, you must have at least 40% of your lash extensions remaining from your previous appointment.",

          classic_fill_guideline_2:
            "At 3 weeks, a minimum of 40% retention is still required to be considered a refill. Anything less may be treated as a full set.",

          classic_fill_warning:
            "🔔 Important: If you book a refill and arrive with less than 40% of your lashes remaining, additional charges may apply or the service may be upgraded to a full set. Appointments booked after 3 weeks will be considered a new set.",

          classic_fill_external:
            "Foreign refills are handled on a case-by-case basis. Additional time may be required or existing extensions may need to be removed before applying a new set, and extra charges may apply.",

          classic_fill_requirement: "Requires a minimum of 40% retention.",

          // ===== HYBRID / VOLUME / YY (EN) =====
          hybrid_badge: "Hybrid",
          hybrid_title: "Hybrid Full Set",
          hybrid_tag: "Classic + Volume",
          hybrid_short: "More density without excess.",

          hybrid_duration_title: "Duration:",
          hybrid_duration_text:
            "2 – 2.5 hours (varies depending on your natural lash count).",

          hybrid_desc_text:
            "This style adds softness, texture, and dimension, making it an excellent option for those seeking a naturally voluminous effect.",

          hybrid_ideal_title: "✅ Ideal for:",
          hybrid_ideal_text:
            "Clients with sparse lashes or those who want more volume than a Classic set but prefer a softer, more natural look than full volume.",

          hybrid_not_ideal_title: "❌ Not ideal for:",
          hybrid_not_ideal_text:
            "Clients seeking a very dramatic or dense lash look, as it provides a more subtle volume compared to Volume or Mega Volume sets.",

          hybrid_fill_badge: "Fill",
          hybrid_fill_title: "Hybrid Fill",
          hybrid_fill_tag: "Maintenance",
          hybrid_fill_short:
            "Fuller, natural-looking lashes with our Hybrid Fill",

          hybrid_fill_duration_title: "Duration:",
          hybrid_fill_duration_text: "1.5 – 2 hours",

          hybrid_fill_guidelines_title: "Refill service guidelines:",
          hybrid_fill_rule_1:
            "To qualify for a 1–3 week refill, you must have at least 40% of your lash extensions remaining from your previous appointment.",
          hybrid_fill_rule_2:
            "At 3 weeks, a minimum of 40% retention is still required to be considered a refill. Anything less may be treated as a full set.",

          hybrid_fill_warning:
            "🔔 Important: If you book a refill and arrive with less than 40% of your lashes remaining, additional charges may apply or the service may be upgraded to a full set.",

          hybrid_fill_after_text:
            "Appointments booked after 3 weeks will be considered a new set.",

          hybrid_fill_external:
            "Foreign refills are handled on a case-by-case basis. Additional time may be required or existing extensions may need to be removed before applying a new set, and extra charges may apply.",

          volume_badge: "Volume",
          volume_title: "Volume Full Set",
          volume_tag: "Intense look",
          volume_short: "Dramatic and defined volume.",

          volume_duration_title: "Duration:",
          volume_duration_text: "2.5 – 2.75 hours",

          volume_desc_title: "Service description",
          volume_desc_text_1:
            "The Volume Full Set creates a dense, fluffy, ultra-voluminous look by applying multiple lightweight extensions per natural lash (2D, 3D, 4D).",
          volume_desc_text_2:
            "This technique results in a bold lash appearance, perfect for clients who love full, dramatic lashes.",

          volume_ideal_title: "✅ Best for:",
          volume_ideal_text:
            "Clients who want a dramatic, high-impact lash style with full coverage.",

          volume_not_ideal_title: "❌ Not ideal for:",
          volume_not_ideal_text:
            "Clients seeking a subtle, natural enhancement—Classic or Hybrid sets may be more suitable.",

          yy_badge: "YY",
          yy_title: "YY Full Set",
          yy_tag: "Light volume",
          yy_short:
            "Perfect for a soft, subtle, and lightweight volumized look.",

          yy_duration_title: "Duration:",
          yy_duration_text: "2 – 2.5 hours",

          yy_desc_title: "Service description",
          yy_desc_text:
            "Provides soft volume and is perfect for clients who want something fuller than Classic sets but lighter than full Volume sets. YY lashes offer a noticeable upgrade with a lightweight feel. The Y-shaped design creates gentle volume while remaining natural and comfortable—ideal for fine lashes or clients with retention issues.",

          yy_ideal_title: "✅ Best for:",
          yy_ideal_text: "A fuller look than Classic with a lightweight feel.",

          yy_not_ideal_title: "❌ Not ideal for:",
          yy_not_ideal_text: "Those seeking dramatic or dense volume.",

          // ===== BROWS & OTHERS (EN) =====
          brows_others_title: "Brows & Others",

          others_design_title: "Eyebrow Design",
          others_design_desc: "Personalized design according to your facial structure.",

          others_threading_title: "Eyebrow Threading",
          others_threading_desc: "Precise and natural threading.",

          others_waxing_title: "Eyebrow Waxing",
          others_waxing_desc: "Fast and effective waxing.",

          others_face_title: "Lips · Chin · Sideburns",
          others_face_desc: "Precise facial hair removal.",

          others_tint_title: "Eyebrow Tinting",
          others_tint_desc: "Tinting to define and add volume.",

          others_lamination_title: "Brow Lamination",
          others_lamination_desc: "Aligned and styled brows.",

          others_lashlift_title: "Lash Lift",
          others_lashlift_desc: "Natural lash lift.",

          others_henna_title: "Henna Brow",
          others_henna_desc: "Temporary pigmentation with a filling effect.",

          others_bath_title: "Lash Bath",
          others_bath_desc: "Deep lash cleansing.",

          others_underarm_title: "Underarm Waxing",
          others_underarm_desc: "Underarm hair removal.",

          // Optgroups
          optgroup_pmu_brows: "Permanent Make Up - Brows",
          optgroup_lips_eyes: "Lips & Eyes",
          optgroup_paramedica: "Paramedical & Oncology",
          optgroup_lashes: "Lash Extensions",
          optgroup_others: "Brows & Other Services",

          // ===== FORM (EN) =====
form_title: "Book an appointment",

form_name: "Full name",
form_name_placeholder: "Your full name",

form_phone: "Mobile / WhatsApp",
form_phone_placeholder: "Example: +1 825 994 1176",

form_email: "Email address",
form_email_placeholder: "example@email.com",

form_service: "Service",
form_service_placeholder: "Select a service",

form_date: "Appointment date",
form_time: "Appointment time",

form_notes: "Notes",
form_notes_placeholder: "Additional details",

form_terms: "I accept the terms and conditions",
form_promotions: "I want to receive promotions and updates",

form_submit: "Submit appointment request",

pay_button: "Pay reservation ($20 CAD)",

// ===== FORM SERVICES (EN) =====
service_microblading: "Microblading Brows",
service_powder: "Ombré / Powder Brows",
service_mixed: "Mixed Brows",
service_nano: "Nano Brows",

service_lip: "Lip Blush",
service_eyes_in: "Natural Lash Line Enhancement",
service_eyeliner: "Permanent Eyeliner",

service_paramedica: "Paramedical & Oncology Micropigmentation",

service_classic: "Classic Full Set",
service_classic_fill: "Classic Fill",
service_hybrid: "Hybrid Full Set",
service_hybrid_fill: "Hybrid Fill",
service_volume: "Volume Full Set",
service_yy: "YY Full Set",

service_brow_design: "Eyebrow Design",
service_brow_lami: "Brow Lamination",
service_brow_tint: "Eyebrow Tint",
service_lash_lift: "Lash Lift",


    social_title: "Social media",
    social_subtitle: "Follow us and contact us directly",

    social_facebook: "Facebook",
    social_instagram: "Instagram",

    social_whatsapp_cta: "Message us on WhatsApp"

    }
  };

  function translate(lang) {
  currentLang = lang;

  /* 🔤 TEXTOS NORMALES (incluye OPTION) */
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (!translations[lang][key]) return;

    if (el.tagName === "OPTION") {
      el.text = translations[lang][key];
    } else {
      el.textContent = translations[lang][key];
    }
  });

  /* 📝 PLACEHOLDERS */
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  /* 🔽 OPTGROUP LABELS */
  document.querySelectorAll("optgroup[data-i18n-label]").forEach(group => {
    const key = group.dataset.i18nLabel;
    if (translations[lang][key]) {
      group.label = translations[lang][key];
    }
  });

  /* 🔄 FORZAR REDIBUJADO DEL SELECT */
  const serviceSelect = document.getElementById("service-select");
  if (serviceSelect) {
    const currentValue = serviceSelect.value;
    serviceSelect.value = "";
    serviceSelect.value = currentValue;
  }
  
}
  translate("es");

  // 🌐 BOTONES DE IDIOMA
document.querySelectorAll(".btn-lang").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    translate(lang);

    document.querySelectorAll(".btn-lang").forEach(b =>
      b.classList.remove("active")
    );
    btn.classList.add("active");
  });
});

  /* =========================================================
     4️⃣ VER MÁS / VER MENOS
  ========================================================= */
  document.querySelectorAll(".btn-more").forEach(btn => {
    btn.addEventListener("click", () => {
      const info = btn.closest(".service-info");
      if (!info) return;

      const shortText = info.querySelector(".service-short");
      const fullText = info.querySelector(".service-full");
      if (!fullText) return;

      const open = !fullText.hasAttribute("hidden");

      if (open) {
        fullText.setAttribute("hidden", "");
        if (shortText) shortText.style.display = "block";
        btn.textContent = translations[currentLang].more;
      } else {
        fullText.removeAttribute("hidden");
        if (shortText) shortText.style.display = "none";
        btn.textContent = translations[currentLang].less;
      }
    });
  });

  /* =========================================================
     5️⃣ TABS SOBRE MÍ
  ========================================================= */
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab)?.classList.add("active");
    });
  });

  const form = document.getElementById("booking-form");
const messageBox = document.getElementById("form-message");

if (form && messageBox) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.dataset.submitting === "true") return;
    form.dataset.submitting = "true";


    messageBox.textContent =
      currentLang === "es"
    ? "Verificando disponibilidad..."
    : "Checking availability...";

    messageBox.style.color = "#555";

    const data = {
      full_name: document.getElementById("client-name").value,
      phone: document.getElementById("client-phone").value,
      email: document.getElementById("client-email").value,
      service: document.getElementById("service-select").value,
      appointment_date: document.getElementById("appointment-date").value,
      appointment_time: document.getElementById("appointment-time").value,
    };

    try {
  const res = await fetch("http://localhost:3001/api/create-appointment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.error || "Time not available");
  }
  
  currentAppointmentId = result.appointmentId;

  messageBox.textContent =
    currentLang === "es"
      ? "✅ Cita reservada. Puedes proceder con el pago."
      : "✅ Appointment reserved. You can proceed with payment.";

  messageBox.style.color = "green";
  document.getElementById("pay-btn").disabled = false;

} catch (err) {
  messageBox.textContent =
    currentLang === "es"
      ? "❌ Este horario ya no está disponible. Elige otro."
      : "❌ This time is no longer available.";

  messageBox.style.color = "red";
} finally {
  form.dataset.submitting = "false";
}

  });
}
  /* =========================================================
     6️⃣ SQUARE – AISLADO
  ========================================================= */
  initSquareSafe();

  /* =========================================================
   SECTION DIVIDER – SCROLL
========================================================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.35 });

document.querySelectorAll(".section-divider").forEach(d => observer.observe(d));

});

/* =========================================================
   SQUARE – SEGURO
========================================================= */
async function initSquareSafe() {
  try {
    if (!window.Square) {
      console.warn("Square no cargó");
      return;
    }

    const payments = window.Square.payments(
      "sandbox-sq0idb-qdZAV2bk5p2eeWzjHVR7ng",
      "CA"
);


    const card = await payments.card();

    await card.attach("#card-container");

    document.getElementById("pay-btn").addEventListener("click", async () => {
      const result = await card.tokenize();

      if (result.status === "OK") {
        const response = await fetch("http://localhost:3001/process-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        sourceId: result.token,
        appointmentId: currentAppointmentId
})

        });

        const data = await response.json();

        if (data.success) {
          alert("✅ Pago realizado correctamente");
        } else {
          alert("❌ Error en el pago");
        }
      } else {
        alert("❌ Tarjeta inválida");
      }
    });

  } catch (err) {
    console.error("❌ Error Square:", err);
  }
}

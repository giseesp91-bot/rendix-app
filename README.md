# Rendix

PWA de control de ingresos y gastos con ciclo de facturacion personalizado.

**En vivo:** https://giseesp91-bot.github.io/rendix-app

## Que es

Rendix nacio de un problema concreto: mi ciclo de facturacion no arranca el dia 1 del mes, sino el 10. Ninguna app de finanzas que probe permitia configurar eso, asi que la construi.

## Funcionalidades

- Ciclo de facturacion configurable (por ejemplo, del 10 al 10)
- Multiples perfiles de negocio en una sola cuenta
- Calendario visual de movimientos
- Graficos de dona para ver la distribucion de gastos
- Exportacion a CSV y JSON
- PWA instalable, mobile-first

## Stack

- **Framework:** React
- **Build:** Vite
- **Estilos:** CSS3, mobile-first
- **Deploy:** GitHub Pages

## Sobre el desarrollo

La parte mas interesante fue la logica del ciclo personalizado: calcular a que periodo pertenece cada movimiento cuando el corte no coincide con el mes calendario, incluyendo los casos borde de fin de mes.

---

**Gisella Espocito** - Desarrolladora Frontend

[LinkedIn](https://www.linkedin.com/in/gisella-espocito-4b5510319/) | [Portfolio](https://giseesp91-bot.github.io/portfolio-gise/)

# Crypto-Sim: Inversiones en Tiempo Real

## Proyecto de Desarrollo Angular con Enfoque en Calidad y Seguridad Bancaria.

Este proyecto es un simulador financiero que consume datos en tiempo real de criptomonedas. Ha sido desarrollado bajo estándares de arquitectura modular, aplicando patrones utilizados en aplicaciones bancarias de alto rendimiento.

 ### 🚀 Características Técnicas Destacadas

 - Arquitectura Modular: Separación estricta de responsabilidades mediante Core, Shared y módulos de funcionalidades (Feature Modules) como Public y Private.

 - Seguridad y Navegación: Implementación de Guards para la protección de rutas privadas y control de acceso basado en el estado del usuario.

 - Intercepción Global: Uso de HTTP Interceptors para la inyección automática de Headers de auditoría (API Keys) y manejo centralizado de errores HTTP.

 - UI/UX Reactiva: Interfaz construida con Angular Material, utilizando formularios reactivos con validaciones avanzadas y Pipes personalizados para la transformación de datos financieros en tiempo real.

### 🛠️ Enfoque en Calidad (QA-Mindset)
Como desarrollador con formación en QA, el proyecto incluye:
Manejo de estados de carga y errores de red capturados por interceptores.
Limpieza de recursos mediante el ciclo de vida de componentes para evitar fugas de memoria.

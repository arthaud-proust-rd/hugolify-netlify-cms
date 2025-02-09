export const blocks = {
    alert: "Alerte",
    blocks: {
        label: "Blocs de contenu",
        label_singular: "Bloc de contenu",
    },
    chart: "Graphique (Camembert, barre…)",
    cta: "Appel à l’action (Bouton)",
    datas: {
        label: "Blocs de données (en colonne)",
        fields: {
            items: "Donnée"
        }
    },
    editorial: "Editorial (contenu et image)",
    embed: "Embed (iframe)",
    faq: {
        label: "FAQ",
        fields: {
            items: "Question/Réponse"
        }
    },
    figure: "Figure (image avec sa légende)",
    form: {
        label: "Formulaire",
        fields: {
            name: "Identifiant du formulaire",
            submit: "Texte du bouton d’envoi",
            items: {
                label: "Champs",
                label_singular: "Champ",
                fields: {
                    label: "Label du champ",
                    type: {
                        label: "Type de champ",
                        options: {
                            email: "Email",
                            select: "Select",
                            tel: "Téléphone",
                            text: "Texte",
                            textarea: "Zone de texte",
                        },
                    },
                    options: {
                        label: "Options",
                        hint: "Pour un champ select seulement"
                    },
                    required: "Champ obligatoire ?",
                    full: "Champ prenant toute la largeur ?",
                    placeholder: "Placeholder",
                    autocomplete: {
                        label: "Autocomplete",
                        options: {
                            postal_code: "Code postal",
                            email: "Email",
                            name: "Nom complet",
                            family_name: "Nom de famille",
                            street_address: "Numéro et nom de la rue",
                            country_name: "Pays",
                            given_name: "Prénom",
                            organization: "Société",
                            tel: "Téléphone",
                            textarea: "Zone de texte",
                        },
                        hint: "Utilisé par le navigateur pour préremplir le champ"
                    }
                },
            },
        },
    },
    gallery: "Galerie d'images",
    images: "Liste d’images",
    informations: {
        label: "Blocs carte d’information (en colonne)",
        fields: {
            items: {
                label: "Infos",
                label_singular: "Info",
                fields: {
                    image: {
                        label: "Image",
                        fields: {
                            isLogo: {
                                label: "Est-ce un logo ou une icône ?",
                                hint: "Pour centrer l’image dans une case"
                            }
                        }
                    }
                }
            }
        }
    },
    instagram: {
        label: "Feed Instagram",
        fields: {
            token: "Access_token provenant d’Instagram"
        }
    },
    latest: "Derniers items (news, projets…)",
    map: "Carte",
    newsletter: {
        label: "Newsletter",
        fields: {
            platform: {
                label: "Plateforme",
                options: {
                    sendinblue: "Brevo (ex Sendinblue)",
                    mailchimp: "Mailchimp",
                }
            },
            hiddens: {
                label: "Champ caché du formulaire",
                fields: {
                    name: 'Nom'
                }
            }
        }
    },
    paragraph: "Paragraphe",
    pushes: {
        label: "Blocs push (en colonne)",
        fields: {
            items: {
                label: "Pushes",
                label_singular: "Push",
                fields: {
                    card: "Texte dans un bloc",
                    image: "Image"
                }
            }
        }
    },
    quote: "Citation",
    selectedcasestudies: "Sélection de cas d’études",
    selectedexpertises: "Sélection d’expertises",
    selectedpersons: "Sélection de personnes",
    selectedplaces: "Sélection de lieux",
    selectedposts: "Sélection d’actualités",
    selectedprojects: "Sélection de projets",
    selectedpublications: "Sélection de parutions",
    testimonials: {
        label: "Témoignages",
        fields: {
            items: {
                label: "Témoignages",
                label_singular: "Témoignage",
            }
        }
    },
    title: "Titre"
}
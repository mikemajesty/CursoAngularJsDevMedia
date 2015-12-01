using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ProjetoPratico.Models
{
    [Table(name: nameof(Noticia))]
    public class Noticia
    {
        private const bool Ativo = true;

        [Key]
        public int IdNoticia { get; set; }
        [Required(ErrorMessage ="{0} é necessário")]
        [StringLength(200, ErrorMessage = "{0} pode ter apenas 200 letras")]
        public string NoticiaTitulo { get; set; }
        [Required(ErrorMessage = "{0} é necessário")]
        [StringLength(250, ErrorMessage = "{0} pode ter apenas 250 letras")]
        public string NoticiaDescricao { get; set; }
        [StringLength(500,ErrorMessage ="{0} pode ter apenas 500 letras")]
        public string NoticiaTexto { get; set; }
        [DataType(dataType: DataType.Date)]
        public DateTime NoticiaData { get; set; } = DateTime.Now;
        public bool Status { get; set; } = Ativo;
        public virtual List<Imagem> Imagem { get; set; }

    }
}
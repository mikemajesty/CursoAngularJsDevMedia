using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoPratico.Models
{
    [Table(name:nameof(Imagem))]
    public class Imagem
    {
        [Key]
        public int IdImagem { get; set; }
        [Required]
        [StringLength(160, ErrorMessage = "{0} pode ter apenas 160 letras")]
        public string ImagemTitulo { get; set; }
        [StringLength(100, ErrorMessage = "{0} pode ter apenas 100 letras")]
        [Required]
        public string ImagemArquivo { get; set; }
        public virtual Noticia Noticia { get; set; }
    }
}
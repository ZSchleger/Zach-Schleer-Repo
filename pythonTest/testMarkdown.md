# Python Test

  Python Project File: [Python File](https://github.com/ZSchleger/Zach-Schleger-Repo/commit/880f6bc04097e630b30c1f145d5c8d58ceb340e3)
  
## Code Explanation

- This code is a Python script that uses the spaCy library to perform Named Entity Recognition (NER) on a collection of XML documents. Specifically, it adds an EntityRuler to spaCy's NER pipeline to help improve the classification of entities in the text.
- The code starts by inmporting the following libraries:
- `spacy`: This is what is used for Named Entity Recognition and Natural Lamguage Processing
- `EntityRuler`:The EntityRuler from the Python spaCy library is a pipeline component that allows for the creation of custom rules to improve Named Entity Recognition (NER) classification in text.
- `Saxonche`: is a Python library for processing XML and XSLT using the Saxon XSLT and XQuery processor.
- Next, it defines the paths to the source collection and the target collection. These paths are defined as relative paths from the location of the Python script.
- The code then creates an EntityRuler and sets it so the NER comes after, so the custom rules take precedence. It adds the EntityRuler to spaCy's pipeline and sets it to validate the entities it recognizes. It then defines a list of patterns, each with a label and a pattern to match in the text. These patterns are used to improve spaCy's NER classification of entities.
- Finally, the code loops through each XML file in the source collection, reads the text from each file, and uses spaCy's NER pipeline to process the text. The tagged text is then written to a new XML file in the target collection.

[![](https://mermaid.ink/img/pako:eNpVkM1uwjAQhF9l5VMrwQvkUImfICIFFAkOSAmHxd4Et8k6sh0BJbx7ncCB-mR5vpnZ9V1Io0hEoqzNRZ7RetgvC4ZZvo8Pe1glabw7wnT61cuakDVXE3AS-XlDVmBsFd5_0WvDPcw_nDeWFGgGS635DFnhzIcIWNyHMrigC1pF14B5A9emfjypxViU3YY5Gsis-SbpXQ_LfIg6vkMpnqgOUpyjUkMOVu4FxGPXKnfEyg0F2zQ7QsHvai9Nc9I8zhkIwwTO27BTD-u81Fdy0HYsfTeu9QpePa2m823nodbOgymh1KyCMcyS5JtZtoNkC4dN-vKsR89_RUxEQ7ZBrcK_3weuEP5MDRUiCleF9qcQBT8Ch503uxtLEXnb0UR0rUJPS42VxUZEJdaOHn-aNZMC?type=png)](https://mermaid.live/edit#pako:eNpVkM1uwjAQhF9l5VMrwQvkUImfICIFFAkOSAmHxd4Et8k6sh0BJbx7ncCB-mR5vpnZ9V1Io0hEoqzNRZ7RetgvC4ZZvo8Pe1glabw7wnT61cuakDVXE3AS-XlDVmBsFd5_0WvDPcw_nDeWFGgGS635DFnhzIcIWNyHMrigC1pF14B5A9emfjypxViU3YY5Gsis-SbpXQ_LfIg6vkMpnqgOUpyjUkMOVu4FxGPXKnfEyg0F2zQ7QsHvai9Nc9I8zhkIwwTO27BTD-u81Fdy0HYsfTeu9QpePa2m823nodbOgymh1KyCMcyS5JtZtoNkC4dN-vKsR89_RUxEQ7ZBrcK_3weuEP5MDRUiCleF9qcQBT8Ch503uxtLEXnb0UR0rUJPS42VxUZEJdaOHn-aNZMC)
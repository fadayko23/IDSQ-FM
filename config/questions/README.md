# Question Configuration Files

This directory contains JSON configuration files that define the question sets for the interior design quiz application.

## File Structure

### Global Questions
- **`Global-Questions.json`**: Universal questions that apply before space-specific flows
  - Project type (New Construction vs Remodel)
  - Build type (Custom Build vs Builder/Spec)
  - Route mode (Express, Standard, Deep-Dive)

### Space-Specific Questions
- **`GeneralInterior-DeepDive.json`**: General Interior category selection and deep-dive questions
  - Category gate (multi-select)
  - Flooring questions
  - Baseboards questions
  - Interior Doors questions
  - (More categories to be added)

### Future Files
- `GeneralExterior-DeepDive.json`: General Exterior categories and questions
- `Kitchen-Questions.json`: Kitchen expert questions (New Construction/Remodel)
- `LivingRoom-Questions.json`: Living Room expert questions
- `Bedroom-Questions.json`: Bedroom expert questions
- `Bathroom-Questions.json`: Bathroom expert questions

## JSON Question Structure

Each question follows this format:

```json
{
  "id": "question_id",
  "space": "Global" | "General Interior" | "Kitchen" | etc.,
  "persona": "clara" | "aria" | "mason",
  "type": "single" | "multi",
  "prompt": "Question text",
  "description": "Help text",
  "options": [
    {
      "id": "option_id",
      "name": "Option Name",
      "description": "Option description",
      "flags": ["flag1", "flag2"]
    }
  ],
  "showIf": {
    "all": [
      { "routeMode": ["deep"] },
      { "selected": "section_gate_gi:flooring" },
      { "answerOf": "previous_question", "in": ["answer1", "answer2"] }
    ]
  },
  "prefOnlyIfBuilder": true
}
```

## Conditional Logic

### Condition Types

1. **Route Mode Filtering:**
   ```json
   { "routeMode": ["deep"] }
   ```
   - Only shows question if route mode matches one of the specified values

2. **Category Selection Filtering:**
   ```json
   { "selected": "section_gate_gi:flooring" }
   ```
   - Only shows question if the specified category is selected in the gate

3. **Previous Answer Filtering:**
   ```json
   { "answerOf": "question_id", "in": ["answer1", "answer2"] }
   ```
   - Only shows question if a previous question's answer matches one of the specified values

4. **Multiple Conditions (ALL):**
   ```json
   { "all": [condition1, condition2, ...] }
   ```
   - All conditions must be true for the question to show

### Special Flags

- **`prefOnlyIfBuilder: true`**: Indicates the question acts as a preference only for builder/spec builds (may not be fully enforceable in builder/spec scenarios)

- **`flags: ["flag1", "flag2"]`**: Options can set flags that affect subsequent questions or material filtering

## Integration

To integrate these JSON files into the quiz application:

1. **Load JSON Files:**
   - Use `fetch()` or `require()` to load the JSON files
   - Parse and validate the JSON structure

2. **Question Routing:**
   - Route based on `route_mode` (express/standard/deep)
   - Filter questions based on `showIf` conditions
   - Handle `prefOnlyIfBuilder` flag for builder/spec builds

3. **State Management:**
   - Store answers in state object
   - Evaluate conditions based on current state
   - Apply flags to material filtering and subsequent questions

4. **Rendering:**
   - Render questions based on `type` (single/multi)
   - Display options with descriptions
   - Handle user selections and update state

## Example Usage

```javascript
// Load global questions
const globalQuestions = await fetch('config/questions/Global-Questions.json')
  .then(res => res.json());

// Filter questions based on conditions
const applicableQuestions = globalQuestions.filter(q => {
  if (!q.showIf) return true;
  return evaluateConditions(q.showIf, currentState);
});

// Render question
renderQuestion(applicableQuestions[0], handlers);
```

## Notes

- All JSON files must be valid JSON (validated on import)
- Question IDs must be unique within each file
- Options IDs must be unique within each question
- Conditional logic is evaluated in real-time based on current state
- Flags are applied immediately when an option is selected

